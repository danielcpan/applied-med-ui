import { useMemo } from 'react';

export type TOperatingSystem =
  | 'Windows 10'
  | 'Windows 8'
  | 'Windows 7'
  | 'Windows Vista'
  | 'Windows XP'
  | 'Windows 2000'
  | 'Mac/iOS'
  | 'Unix'
  | 'Linux'
  | 'Unknown';

export const getOperatingSystem = (userAgent: string): TOperatingSystem => {
  if (userAgent.indexOf('Windows NT 10.0') != -1) return 'Windows 10';
  if (userAgent.indexOf('Windows NT 6.2') != -1) return 'Windows 8';
  if (userAgent.indexOf('Windows NT 6.1') != -1) return 'Windows 7';
  if (userAgent.indexOf('Windows NT 6.0') != -1) return 'Windows Vista';
  if (userAgent.indexOf('Windows NT 5.1') != -1) return 'Windows XP';
  if (userAgent.indexOf('Windows NT 5.0') != -1) return 'Windows 2000';
  if (userAgent.indexOf('Mac') != -1) return 'Mac/iOS';
  if (userAgent.indexOf('X11') != -1) return 'Unix';
  if (userAgent.indexOf('Linux') != -1) return 'Linux';
  return 'Unknown';
};

const useOperatingSystem = (): TOperatingSystem => {
  const { userAgent = '' } = window?.navigator ?? {};

  return useMemo(() => getOperatingSystem(userAgent), [userAgent]);
};

export default useOperatingSystem;
