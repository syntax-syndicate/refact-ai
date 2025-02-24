import React, { useState, useCallback, useEffect } from 'react';
import { Text } from '../Text';
import { Button, Heading } from '@radix-ui/themes';
import styles from './BYOK.module.css';
import type { LLMProvider, ProviderConfig, LLMModel } from './types';
import { ProvidersList } from './ProvidersList';
import { ProviderForm } from './ProviderForm';
import type { Config } from '../../features/Config/configSlice';

export interface BYOKProps {
  onProviderSelect?: (provider: LLMProvider) => void;
  onProviderConfigChange?: (config: ProviderConfig) => void;
  onModelSelect?: (model: LLMModel) => void;
  selectedProviderId?: string;
  selectedModelId?: string;
  providerConfig?: ProviderConfig;
  customProviders?: LLMProvider[];
  configuredProviders?: {
    provider: LLMProvider;
    config: ProviderConfig;
    modelId?: string;
  }[];
  onRemoveProvider?: (providerId: string) => void;
  host: Config['host'];
}

export const BYOK: React.FC<BYOKProps> = ({
  onProviderSelect,
  onProviderConfigChange,
  onModelSelect,
  selectedProviderId,
  selectedModelId,
  providerConfig,
  configuredProviders = [],
  onRemoveProvider
}) => {
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Removed auto-show behavior

  const handleAddNewClick = useCallback(() => {
    setIsAddingNew(true);
  }, []);

  const handleCancelAdd = useCallback(() => {
    setIsAddingNew(false);
    if (onProviderSelect) {
      onProviderSelect(undefined);
    }
  }, [onProviderSelect]);

  const handleProviderSelect = useCallback((provider: LLMProvider) => {
    if (onProviderSelect) {
      onProviderSelect(provider);
    }
  }, [onProviderSelect]);

  const handleSave = useCallback(() => {
    // Only save if we have all required data
    if (selectedProviderId && providerConfig) {
      // Reset the add new provider form
      setIsAddingNew(false);
    }
  }, [selectedProviderId, providerConfig]);

  return (
    <div className={styles.container}>
      <Heading as="h3" align="center" mb="5">
        Manage LLM Providers and Models
      </Heading>
      <div>
         <Text variant="body">
          In addition to AI models provided by Refact.ai you can add one or more local or cloud inference providers
        </Text>
      </div>

      <ProvidersList
            providers={configuredProviders}
            onRemoveProvider={onRemoveProvider}
       />

      {!isAddingNew ? (
        <div className={styles.addNewSection}>
          <Button size="3" onClick={handleAddNewClick}>
            Add additional LLM provider
          </Button>
        </div>
      ) : (
        <div>
          <ProviderForm
            selectedProviderId={selectedProviderId}
            selectedModelId={selectedModelId}
            providerConfig={providerConfig}
            onProviderSelect={handleProviderSelect}
            onProviderConfigChange={onProviderConfigChange}
            onModelSelect={onModelSelect}
            onSave={handleSave}
          />
          <div className={styles.actionButtons}>
            <Button variant="soft" onClick={handleCancelAdd}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};