const env = {
  NODE_ENV: process.env.NODE_ENV,
  DEBUG: process.env.NODE_ENV === 'development',
  SITE_URL: process.env.SITE_URL,
  GQL_API_URL: process.env.NEXT_PUBLIC_GQL_API_URL,
  REST_API_URL: process.env.NEXT_PUBLIC_REST_API_URL,
};

export default env;
