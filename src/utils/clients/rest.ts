import wretch from 'wretch';

import env from 'utils/env';

const restApi = wretch(env.REST_API_URL, {
  mode: 'cors',
  credentials: 'same-origin',
  referrerPolicy: 'same-origin',
});

export { restApi };
