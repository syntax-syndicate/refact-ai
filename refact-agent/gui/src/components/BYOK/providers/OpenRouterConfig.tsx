import React from 'react';
import { BaseProviderConfig } from './BaseProviderConfig';
import { ProviderConfigProps } from '../types';

export const OpenRouterConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'apiKey',
      label: 'OpenRouter API Key',
      type: 'text' as const,
      placeholder: 'Enter your OpenRouter API key'
    },
  ];

  return (
    <BaseProviderConfig
      {...props}
      fields={fields}
    />
  );
};