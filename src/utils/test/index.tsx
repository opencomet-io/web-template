import { ReactElement } from 'react';
import { render } from '@testing-library/react';

const renderWithProviders = (ui: ReactElement, opts = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...opts,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { renderWithProviders as render };
