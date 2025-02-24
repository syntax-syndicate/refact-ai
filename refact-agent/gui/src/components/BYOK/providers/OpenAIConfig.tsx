import React from 'react';
import { BaseProviderConfig } from './BaseProviderConfig';
import { ProviderConfigProps } from '../types';

export const OpenAIConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'apiKey',
      label: 'OpenAI API Key',
      type: 'text' as const,
      placeholder: 'Enter your OpenAI API key',
      hint: 'This key is stored locally and only used to make API requests from this extension.',
    },
  ];

  return (
    <BaseProviderConfig
      {...props}
      fields={fields}
    />
  );
};