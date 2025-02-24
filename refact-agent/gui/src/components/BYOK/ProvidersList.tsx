import React from 'react';
import { Button } from '@radix-ui/themes';
import { Text } from '../Text';
import styles from './BYOK.module.css';
import type { LLMProvider, ProviderConfig } from './types';

interface ProvidersListProps {
  providers: Array<{
    provider: LLMProvider;
    config: ProviderConfig;
    modelId?: string;
  }>;
  onRemoveProvider?: (providerId: string) => void;
}

export const ProvidersList: React.FC<ProvidersListProps> = ({
  providers,
  onRemoveProvider,
}) => {
  return (
    <>
      {providers.length > 0 && (
        <div className={styles.configuredProviders}>
          {providers.map(({ provider, config, modelId }) => (
            <div key={provider.id} className={styles.configuredProvider}>
              <div className={styles.providerInfo}>
                <Text variant="h3">{provider.name}</Text>
                <Text variant="caption">{provider.description}</Text>
                {modelId && <Text variant="body">Model: {modelId}</Text>}
              </div>
              {onRemoveProvider && (
                <Button
                  variant="soft"
                  color="red"
                  onClick={() => onRemoveProvider(provider.id)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
        </div>
      )}


    </>
  );
};