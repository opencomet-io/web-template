import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

const useDeviceType = (): { mobile: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const uap = new UAParser();
    setIsMobile(uap.getDevice().type === 'mobile');
  }, []);

  return { mobile: isMobile };
};

export default useDeviceType;
