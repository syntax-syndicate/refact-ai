import React from 'react';
import { BaseProviderConfig, ProviderConfigProps } from './BaseProviderConfig';

export const MistralConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'apiKey',
      label: 'Mistral API Key',
      type: 'text' as const,
      placeholder: 'Enter your Mistral API key',
      hint: (
        <>
          This key is stored locally and only used to make API requests from this extension.{' '}
          <a href="https://mistral.ai/api/" target="_blank" rel="noopener noreferrer">
            You can get a Mistral API key by signing up here
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <BaseProviderConfig
      {...props}
      fields={fields}
    />
  );
};