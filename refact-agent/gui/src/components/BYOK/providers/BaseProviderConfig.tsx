import React from 'react';
import { Select } from '@radix-ui/themes';
import styles from './BaseProviderConfig.module.css';
import { ProviderConfig, LLMModel, ModelCapabilities } from '../types';

export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'select';
  placeholder?: string;
  options?: { value: string; label: string }[];
  hint?: string | React.ReactNode;
}

export interface ProviderConfigProps {
  config?: ProviderConfig;
  onConfigChange?: (config: ProviderConfig) => void;
  onModelSelect?: (model: LLMModel) => void;
  selectedModel?: string;
}

export const BaseProviderConfig: React.FC<ProviderConfigProps & {
  fields: FieldConfig[];
  capabilities?: ModelCapabilities;
  hint?: string | React.ReactNode;
}> = ({
  config = {},
  onConfigChange,
  provider,
  fields,
  capabilities,
  hint,
}) => {
  const handleConfigChange = (field: string, value: string) => {
    if (onConfigChange) {
      onConfigChange({
        ...config,
        [field]: value,
      });
    }
  };

  const renderField = (field: FieldConfig) => {
    const value = config[field.id] || '';

    return (
      <div key={field.id} className={styles.field}>
        <label htmlFor={field.id}>{field.label}</label>
        {field.type === 'text' ? (
          <input
            type="text"
            id={field.id}
            value={value}
            onChange={(e) => handleConfigChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={styles.input}
          />
        ) : (
          <Select.Root 
            value={value} 
            onValueChange={(value) => handleConfigChange(field.id, value)}
          >
            <Select.Trigger placeholder={field.placeholder} />
            <Select.Content>
              {field.options?.map(option => (
                <Select.Item key={option.value} value={option.value}>
                  {option.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        )}
        {field.hint && <div className={styles.hint}>{field.hint}</div>}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {fields.map(renderField)}
      {hint && <div className={styles.hint}>{hint}</div>}
    </div>
  );
};