import { ReactElement } from 'react';
import { afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

const renderWithProviders = (ui: ReactElement, opts = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...opts,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { renderWithProviders as render };
