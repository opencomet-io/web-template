import type { FC } from 'react';

import EnhancedHead from 'utils/meta/EnhancedHead';

const Landing: FC = () => {
  return (
    <>
      <EnhancedHead title="Landing" description="Landing page" />
      <h1>OpenComet</h1>
    </>
  );
};

export default Landing;
