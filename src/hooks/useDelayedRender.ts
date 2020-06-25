import { useState, useEffect } from 'react';

const useDelayedRender = (delay: number) => {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (fn: any) => !delayed && fn(); // eslint-disable-line @typescript-eslint/explicit-function-return-type
};

export default useDelayedRender;
