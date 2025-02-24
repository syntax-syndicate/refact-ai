import React from 'react';
import { BaseProviderConfig, ProviderConfigProps } from './BaseProviderConfig';

export const DeepSeekConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'apiKey',
      label: 'DeepSeek API Key',
      type: 'text' as const,
      placeholder: 'Enter your DeepSeek API key',
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