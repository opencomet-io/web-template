import wretch from 'wretch';

const restAPI = wretch(process.env.NEXT_PUBLIC_REST_API_URL, {
  mode: 'cors',
  credentials: 'same-origin',
  referrerPolicy: 'same-origin',
});

export { restAPI };
