import React from 'react';
import { Select } from '../Select';
import styles from './BYOK.module.css';
import type { LLMProvider, ProviderConfig, LLMModel } from './types';
import { DEFAULT_PROVIDERS } from './providers';
import { Button } from '@radix-ui/themes';

interface ProviderFormProps {
  providers: LLMProvider[];
  selectedProviderId?: string;
  selectedModelId?: string;
  providerConfig?: ProviderConfig;
  onProviderSelect: (provider: LLMProvider) => void;
  onSave?: () => void; // Add a new prop for the save action
  onProviderConfigChange?: (config: ProviderConfig) => void;
  onModelSelect?: (model: LLMModel) => void;
}

export const ProviderForm: React.FC<ProviderFormProps> = ({
  selectedModelId,
  providerConfig,
  providers = DEFAULT_PROVIDERS,
  selectedProviderId = 'openai',
  onProviderSelect,
  onSave, // Destructure the new prop
  onProviderConfigChange,
  onModelSelect,
}) => {
  const selectedProvider = providers.find(p => p.id === selectedProviderId);
  const ConfigComponent = selectedProvider?.configComponent;

  const handleProviderChange = (value: string) => {
    const provider = providers.find(p => p.id === value);
    if (provider) {
      onProviderSelect(provider);
      
      // Reset or initialize provider-specific config
      const initialConfig: ProviderConfig = {};
      
      switch (provider.id) {
        case 'openai':
          initialConfig.model = 'gpt-4o';
          break;
        case 'mistral':
          initialConfig.model = 'codestral-2501';
          break;
        case 'lm-studio':
          initialConfig.baseUrl = 'http://127.0.0.1:1234';
          initialConfig.modelId = 'qwen2.5-7b-instruct-1m';
          break;
        case 'together':
          initialConfig.modelId = '';
          break;
        case 'deepseek':
          initialConfig.baseUrl = 'https://api.deepseek.com';
          break;
      }

      if (onProviderConfigChange) {
        onProviderConfigChange(initialConfig);
      }
      
      // Reset model selection if needed
      if (onModelSelect && initialConfig.model) {
        onModelSelect(initialConfig.model);
      }
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };

  return (
    <div className={styles.newProviderSection}>
      <div className={styles.providerSelect}>
        <Select
          value={selectedProviderId}
          onChange={handleProviderChange}
          options={providers.map(provider => ({
            value: provider.id,
            label: provider.name,
            description: provider.description,
          }))}
          placeholder="Select API Provider"
        />
      </div>
      
      {ConfigComponent && (
        <div className={styles.providerConfig}>
          <ConfigComponent
            config={providerConfig}
            onConfigChange={onProviderConfigChange}
            onModelSelect={onModelSelect}
            selectedModel={selectedModelId}
          />
        </div>
      )}

      <Button onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};