import React, { useContext, useEffect, useRef } from 'react';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';
import { useMediaQuery, ListSubheader, TextField } from '@material-ui/core';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';

const LISTBOX_PADDING = 8; // px

const renderRow = ({ data, index, style }: ListChildComponentProps) => {
  return React.cloneElement(data[index], {
    style: { ...style, top: (style.top as number) + LISTBOX_PADDING }
  });
};

const OuterElementContext = React.createContext({});

// eslint-disable-next-line react/display-name
const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);

  return <div ref={ref} {...props} {...outerProps} />;
});

const useResetCache = (data: any) => {
  const ref = useRef<VariableSizeList>(null);

  useEffect(() => {
    if (ref.current != null) ref.current.resetAfterIndex(0, true);
  }, [data]);

  return ref;
};

// Adapter for react-window
export const ListboxComponent = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactNode) => {
    return React.isValidElement(child) && child.type === ListSubheader ? 48 : itemSize;
  };

  const getHeight = () => {
    return itemCount > 8 ? 8 * itemSize : itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index: number) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const StyledAutocomplete = withStyles({
  listbox: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0
    }
  }
})(MuiAutocomplete);

const AutocompleteBase = (props: any) => (
  <StyledAutocomplete
    size="small"
    clearOnEscape
    getOptionLabel={({ label }) => label}
    ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
    renderInput={params => (
      <TextField {...params} variant="outlined" type="text" size="small" margin="dense" fullWidth />
    )}
    {...props}
  />
);

export default AutocompleteBase;
