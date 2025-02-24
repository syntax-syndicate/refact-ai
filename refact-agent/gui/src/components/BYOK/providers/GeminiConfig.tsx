import React from 'react';
import { BaseProviderConfig, ProviderConfigProps } from './BaseProviderConfig';

export const GeminiConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'apiKey',
      label: 'Gemini API Key',
      type: 'text' as const,
      placeholder: 'Enter API Key...',
      hint: (
        <>
          This key is stored locally and only used to make API requests from this extension.{' '}
          <a href="#" className="link">You can get a Gemini API key by signing up here.</a>
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