import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { BYOK } from '../../components/BYOK/BYOK';
import { selectBYOKState, selectProvider, updateProviderConfig, selectModel, removeProvider } from './byokSlice';
import type { Config } from '../Config/configSlice';

interface BYOKContainerProps {
  host: Config['host'];
}

export const BYOKContainer: React.FC<BYOKContainerProps> = ({ host }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectBYOKState);

  return (
    <BYOK
      host={host}
      selectedProviderId={state.selectedProviderId}
      selectedModelId={state.selectedModelId}
      providerConfig={state.providerConfig}
      configuredProviders={state.configuredProviders}
      onProviderSelect={(provider) => dispatch(selectProvider(provider))}
      onProviderConfigChange={(config) => dispatch(updateProviderConfig(config))}
      onModelSelect={(model) => dispatch(selectModel(model))}
      onRemoveProvider={(providerId) => dispatch(removeProvider(providerId))}
    />
  );
};