import React from 'react';
import { BaseProviderConfig, ProviderConfigProps } from './BaseProviderConfig';

export const LMStudioConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'baseUrl',
      label: 'Base URL (optional)',
      type: 'text' as const,
      placeholder: 'http://127.0.0.1:1234',
    },
    {
      id: 'modelId',
      label: 'Model ID',
      type: 'text' as const,
      placeholder: 'Enter your model ID (e.g. "model-1234")',
    },
  ];

  const hint = (
    <>
      LM Studio allows you to run models locally on your computer. For instructions on how to get started, see their{' '}
      <a href="#" className="link">quickstart guide</a>. You will also need to start LM Studio's{' '}
      <a href="#" className="link">local server</a> feature to use it with this extension.
    </>
  );

  return (
    <BaseProviderConfig
      {...props}
      fields={fields}
      hint={hint}
    />
  );
};