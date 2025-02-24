import type { Meta, StoryObj } from '@storybook/react';
import { BYOK } from './BYOK';
import { Theme } from '@radix-ui/themes';
import { DeepSeekConfig } from './providers/DeepSeekConfig';

const meta = {
  title: 'Components/BYOK',
  component: BYOK,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
        <div style={{ width: '800px', padding: '1rem' }}>
          <Story />
        </div>
      </Theme>
    ),
  ],
} satisfies Meta<typeof BYOK>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    configuredProviders: [],
  },
};

export const WithConfiguredProviders: Story = {
  args: {
    configuredProviders: [
      {
        provider: {
          id: 'refact',
          name: 'Refact.ai Cloud',
          description: '',
        },
        config: {
          baseUrl: 'https://api.refact.ai',
          apiKey: '***',
        }
      },
      {
        provider: {
          id: 'openai',
          name: 'OpenAI',
          description: 'Official OpenAI API',
        },
        config: {
          apiKey: '***',
        }
      },
      {
        provider: {
          id: 'deepseek',
          name: 'DeepSeek',
          description: 'DeepSeek API',
          configComponent: DeepSeekConfig,
        },
        config: {
          apiKey: '***',
          baseUrl: 'https://api.deepseek.com',
        }
      },
    ],
  },
};
