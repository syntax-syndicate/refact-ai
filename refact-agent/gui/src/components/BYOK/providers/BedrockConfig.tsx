import React from 'react';
import { BaseProviderConfig, ProviderConfigProps } from './BaseProviderConfig';

export const BedrockConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'accessKey',
      label: 'AWS Access Key',
      type: 'text' as const,
      placeholder: 'Enter your AWS Access Key',
    },
    {
      id: 'secretKey',
      label: 'AWS Secret Key',
      type: 'text' as const,
      placeholder: 'Enter your AWS Secret Key',
    },
    {
      id: 'sessionToken',
      label: 'AWS Session Token',
      type: 'text' as const,
      placeholder: 'Enter your AWS Session Token',
    },
    {
      id: 'region',
      label: 'AWS Region',
      type: 'select' as const,
      placeholder: 'Select a region...',
      options: [
        { value: 'us-east-1', label: 'us-east-1' },
        { value: 'us-west-2', label: 'us-west-2' },
        { value: 'eu-west-1', label: 'eu-west-1' },
        { value: 'ap-southeast-1', label: 'ap-southeast-1' },
      ],
    },
  ];

  
  return (
    <BaseProviderConfig
      {...props}
      fields={fields}
    />
  );
};