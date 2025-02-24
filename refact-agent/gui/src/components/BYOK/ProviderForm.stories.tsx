import type { Meta, StoryObj } from '@storybook/react';
import { ProviderForm } from './ProviderForm';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Components/BYOK/ProviderForm',
  component: ProviderForm,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
        <div style={{ width: '600px', padding: '1rem' }}>
          <Story />
        </div>
      </Theme>
    ),
  ],
} satisfies Meta<typeof ProviderForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {
  onProviderSelect: (provider) => console.log('Provider selected:', provider),
  onProviderConfigChange: (config) => console.log('Config changed:', config),
  onModelSelect: (model) => console.log('Model selected:', model),
};

export const Default: Story = {
  args: commonArgs,
};

export const WithDeepSeek: Story = {
  args: {
    ...commonArgs,
    selectedProviderId: 'deepseek',
    providerConfig: {
      apiKey: '***',
      baseUrl: 'https://api.deepseek.com',
    },
  },
};

export const WithOpenAI: Story = {
  args: {
    ...commonArgs,
    selectedProviderId: 'openai',
    providerConfig: {
      apiKey: '***',
      model: 'gpt-4o',
    },
  },
};

export const WithMistral: Story = {
  args: {
    ...commonArgs,
    selectedProviderId: 'mistral',
    providerConfig: {
      apiKey: '***',
      model: 'codestral-2501',
    },
  },
};


export const WithLMStudio: Story = {
  args: {
    ...commonArgs,
    selectedProviderId: 'lm-studio',
    providerConfig: {
      baseUrl: 'http://127.0.0.1:1234',
      modelId: 'qwen2.5-7b-instruct-1m',
    },
  },
};

export const WithBedrock: Story = {
  args: {
    ...commonArgs,
    selectedProviderId: 'aws-bedrock',
    providerConfig: {
      accessKey: '***',
      secretKey: '***',
      sessionToken: '***',
      region: 'us-east-1',
    },
  },
};

export const WithOllama: Story = {
  args: {
    ...commonArgs,
    selectedProviderId: 'ollama',
    providerConfig: {
      baseUrl: 'http://localhost:11434',
      modelId: 'llama3.1',
    },
  },
};

