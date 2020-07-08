import { useState } from 'react';

const isString = el => typeof el === 'string' || el instanceof String;

const getItem = (itemKey: string) => {
  return localStorage.getItem(itemKey);
};

const clearAll = () => {
  localStorage.clear();
};

const useLocalStorage = (key: string, initialValue = {}) => {
  if (!isString(key)) throw new Error('Key must be of type string!');

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log('LOCAL SOTRAGE GET_VALUE ERROR:', err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log('LOCAL STORAGE SET_VALUE ERROR:', err);
    }
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return [storedValue, setValue, { getItem, remove, clearAll }];
};

export default useLocalStorage;
