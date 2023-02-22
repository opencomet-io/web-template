import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExternalLink from './ExternalLink';

export default {
  title: 'Components/Atoms/ExternalLink',
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = args => <ExternalLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  destination: 'https://example.com',
  children: 'Link text',
};
