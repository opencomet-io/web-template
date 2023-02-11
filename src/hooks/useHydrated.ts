import { useEffect, useState } from 'react';

const useHydrated = (): boolean => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
};

export default useHydrated;
