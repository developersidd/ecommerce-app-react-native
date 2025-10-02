import { useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
const useDebounce = <T extends (...args: (number | string)[]) => void>(
  cb: T,
  delay: number = 300,
) => {
  const timeout = useRef<null | Timer>(null);

  useEffect(() => {
    // Cleanup
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
