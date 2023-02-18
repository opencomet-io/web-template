import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import PageHead from 'utils/meta/PageHead';

const Landing: FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <PageHead title="Landing" description="Landing page." />
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
