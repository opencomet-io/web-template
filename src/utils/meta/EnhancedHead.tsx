import { FC } from 'react';
import Head from 'next/head';

export interface Props {
  title: string;
  description: string;
}

const EnhancedHead: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default EnhancedHead;
