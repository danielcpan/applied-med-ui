import { getOperatingSystem } from './useOperatingSystem';

describe('getOperatingSystem()', () => {
  it('should return Windows 10', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36';
    const result = getOperatingSystem(userAgent);

    expect(result).toEqual('Windows 10');
  });

  it('should return Windows 7', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36';
    const result = getOperatingSystem(userAgent);

    expect(result).toEqual('Windows 7');
  });

  it('should return unknown', () => {
    const result = getOperatingSystem('im a user agent that does not exist');

    expect(result).toEqual('Unknown');
  });  
});
