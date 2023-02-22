import { render, screen } from 'utils/test';

import ExternalLink from './ExternalLink';

describe('ExternalLink', async () => {
  it('should render the text', () => {
    render(<ExternalLink destination="https://example.com">click me</ExternalLink>);

    expect(screen.getByText('click me')).toBeInTheDocument();
  });
});
