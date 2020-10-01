import {
    getComponentIsLoading,
    getComponentIsFetching,
    getComponentHasError,
    getComponentHasData
  } from './Async.helpers';

  describe('getComponentIsLoading()', () => {
    it('should return true with hookVals', () => {
      const isLoading = true;
      const hookVals = [{ status: 'loading', isFetching: true, error: null, data: null}];
      const result = getComponentIsLoading({isLoading, hookVals});
  
      expect(result).toEqual(true);
    });

    it('should return true with no hookVals', () => {
        const isLoading = true;
        const hookVals = null;
        const result = getComponentIsLoading({isLoading, hookVals});
    
        expect(result).toEqual(true);
      });

      it('should return true with undefined isLoading', () => {
        const isLoading = undefined;
        const hookVals = [{ status: 'loading', isFetching: true, error: null, data: null}];
        const result = getComponentIsLoading({isLoading, hookVals});
    
        expect(result).toEqual(true);
      });

      it('should return false with no hookVals', () => {
        const isLoading = false;
        const hookVals = null;
        const result = getComponentIsLoading({isLoading, hookVals});
    
        expect(result).toEqual(false);
      });
  });

  describe('getComponentIsFetching()', () => {
    it('should return true with hookVals', () => {
      const isFetching = true;
      const hookVals = [{ status: 'loading', isFetching: true, error: null, data: null}];
      const result = getComponentIsFetching({isFetching, hookVals});
  
      expect(result).toEqual(true);
    });

      it('should return false with hookVals', () => {
        const isFetching = false;
        const hookVals = [{ status: 'loading', isFetching: false, error: null, data: null}];
        const result = getComponentIsFetching({isFetching, hookVals});
    
        expect(result).toEqual(false);
      });
  });

  describe('getComponentHasError()', () => {
    it('should return true with hookVals', () => {
      const hasError = true;
      const hookVals = [{ status: 'loading', isFetching: false, error: true, data: null}];
      const result = getComponentHasError({hasError, hookVals});
  
      expect(result).toEqual(true);
    });

      it('should return false with hookVals', () => {
        const hasError = false;
        const hookVals = [{ status: 'loading', isFetching: false, error: false, data: null}];
        const result = getComponentHasError({hasError, hookVals});
    
        expect(result).toEqual(false);
      });
  });

  describe('getComponentHasData()', () => {
    it('should return true with hookVals', () => {
      const hasData = true;
      const hookVals = [{ status: 'loading', isFetching: false, error: false, data: {data: true}}];
      const result = getComponentHasData({hasData, hookVals});
  
      expect(result).toEqual(true);
    });

      it('should return false with no hookVals', () => {
        const hasData = false;
        const hookVals = null;
        const result = getComponentHasData({hasData, hookVals});
    
        expect(result).toEqual(false);
      });
  });
  
  