const env = {
  NODE_ENV: process.env.NODE_ENV,
  GQL_API_URL: process.env.NEXT_PUBLIC_GQL_API_URL,
  REST_API_URL: process.env.NEXT_PUBLIC_REST_API_URL,
  DEBUG: process.env.NODE_ENV === 'development',
};

export default env;
