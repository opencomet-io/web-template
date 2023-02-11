import type { FC } from 'react';
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import EnhancedHead from 'utils/meta/EnhancedHead';

const Landing: FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <EnhancedHead title="Landing" description="Landing page" />
      <h1>Landing</h1>
      <p>{t('greeting')}</p>
    </>
  );
};

const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export { getServerSideProps };
export default Landing;
