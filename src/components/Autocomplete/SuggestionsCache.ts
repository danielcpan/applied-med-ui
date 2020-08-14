type TStorage = {
  getItem: (key: string) => any;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};

const normalize = (data: any) => {
  const [objDict, mapDict] = data.reduce(
    ([obj, map]: any, el: any) => {
      obj[el.value] = { ...el, isSuggestion: true };
      map.set(el.value, { ...el, isSuggestion: true });

      return [obj, map];
    },
    [{}, new Map()]
  );

  console.log('mapDict:', mapDict);
  console.log('mapDict.keys():', mapDict.keys());

  const ids = Array.from(mapDict.keys());

  return { entities: objDict, ids };
};

export class SuggestionCache {
  storageKey: string;
  storage: TStorage;

  constructor(storageKey = 'suggestions', storage = window.localStorage) {
    this.storageKey = storageKey;
    this.storage = storage;
  }

  getState() {
    const state = this.storage.getItem(this.storageKey);

    return state ? JSON.parse(state) : null;
  }

  getSuggestion(key: string) {
    const state = this.getState();

    return state ? state[key] : null;
  }

  getSuggestionData(key: string) {
    const { entities = {}, ids = [] } = this.getSuggestion(key) || {};

    return ids.map((id: any) => entities[id]);
  }

  setSuggestionData(key: string, data: any) {
    try {
      const state = this.getState();
      const { entities, ids } = normalize(data);
      const prevSuggestion = this.getSuggestion(key);
      let updatedState;

      if (!prevSuggestion) {
        updatedState = { ...state, [key]: { entities, ids } };
      } else {
        updatedState = {
          ...state,
          [key]: {
            entities: { ...prevSuggestion.entities, ...entities },
            ids: [...new Set([...prevSuggestion.ids, ...ids])]
          }
        };
      }

      this.storage.setItem(this.storageKey, JSON.stringify(updatedState));
    } catch (err) {
      console.error('Suggestion Cache Error:', err);
      this.storage.removeItem(this.storageKey);
    }
  }
}

const defaultSuggestionCache = new SuggestionCache('autocomplete-suggestions', window.localStorage);
export { defaultSuggestionCache as suggestionCache };
