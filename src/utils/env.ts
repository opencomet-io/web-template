const env = {
  NODE_ENV: process.env.NODE_ENV,
  DEBUG: process.env.NODE_ENV === 'development',
  GQL_API_URL: process.env.GQL_API_URL,
  REST_API_URL: process.env.REST_API_URL,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  ENABLE_PWA: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true',
};

export default env;
