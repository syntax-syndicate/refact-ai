import React from 'react';
import { BaseProviderConfig } from './BaseProviderConfig';
import { ProviderConfigProps } from '../types';

export const OllamaConfig: React.FC<ProviderConfigProps> = (props) => {
  const fields = [
    {
      id: 'baseUrl',
      label: 'Base URL',
      type: 'text' as const,
      placeholder: 'Default: http://localhost:11434',
    }
  ];

  const hint = (
    <>
      Ollama allows you to run models locally on your computer. For instructions on how to get started, see their{' '}
      <a href="#" className="link">quickstart guide</a>.
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