import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, SSRConfig } from 'next-i18next';

import PageHead from 'utils/meta/PageHead';
import { restApi } from 'utils/clients/rest';

export interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const Landing: FC<Props> = ({ message }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <PageHead title="Landing" description="Landing page." />
      <h1>Landing</h1>
      <p>{t('greeting')}</p>
      <p>Mocked response: {message}</p>
    </>
  );
};

type Data = {
  message: string;
};

const getServerSideProps: GetServerSideProps<Data & SSRConfig> = async ({ locale = 'en' }) => {
  const message = await restApi.get('/ping').text();

  return {
    props: {
      message,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export { getServerSideProps };
export default Landing;
