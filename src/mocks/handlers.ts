import { rest } from 'msw';

import env from 'utils/env';

export const handlers = [
  rest.get(env.REST_API_URL + '/ping', (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('pong'));
  }),
];
