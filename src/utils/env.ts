const env = {
  NODE_ENV: process.env.NODE_ENV,
  DEBUG: process.env.NODE_ENV === 'development',
  SITE_URL: process.env.SITE_URL,
  GQL_API_URL: process.env.GQL_API_URL,
  REST_API_URL: process.env.REST_API_URL,
  ENABLE_PWA: process.env.ENABLE_PWA === 'true',
};

export default env;
