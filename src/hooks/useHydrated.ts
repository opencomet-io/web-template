import { useEffect, useState } from 'react';

const useHydrated = (): boolean => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(typeof window !== 'undefined');
  }, []);

  return isHydrated;
};

export default useHydrated;
