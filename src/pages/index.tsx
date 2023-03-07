import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation, SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageHead from 'utils/meta/PageHead';

export interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const Landing: FC<Props> = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <PageHead title="Landing" description="Landing page." />
      <h1>Landing</h1>
      <p>{t('greeting')}</p>
    </>
  );
};

type Data = {};

const getServerSideProps: GetServerSideProps<Data & SSRConfig> = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export { getServerSideProps };
export default Landing;
