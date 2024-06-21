import { useEffect, useState } from 'react';

const useDebounceValue = (value: string, delay: number = 500) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timeId);
  }, [delay, value]);

  return debounced;
};

export default useDebounceValue;
