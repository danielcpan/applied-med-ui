import { useRef } from 'react';

const useRenderCount = (name: string) => {
  const renderCount = useRef(0);

  console.log(`${name} Render Count: ${renderCount.current++}`);
};

export default useRenderCount;
