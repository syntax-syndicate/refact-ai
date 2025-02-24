import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { LLMProvider, ProviderConfig, LLMModel } from "../../components/BYOK/types";

interface BYOKState {
  selectedProviderId?: string;
  selectedModelId?: string;
  providerConfig?: ProviderConfig;
  configuredProviders: {
    provider: LLMProvider;
    config: ProviderConfig;
    modelId?: string;
  }[];
}

const initialState: BYOKState = {
  configuredProviders: [],
};

export const byokSlice = createSlice({
  name: "byok",
  initialState,
  reducers: {
    selectProvider: (state, action: PayloadAction<LLMProvider | undefined>) => {
      if (action.payload) {
        state.selectedProviderId = action.payload.id;
      } else {
        state.selectedProviderId = undefined;
      }
    },
    updateProviderConfig: (state, action: PayloadAction<ProviderConfig>) => {
      state.providerConfig = action.payload;
    },
    selectModel: (state, action: PayloadAction<LLMModel>) => {
      state.selectedModelId = action.payload.id;
    },
    addConfiguredProvider: (
      state,
      action: PayloadAction<{
        provider: LLMProvider;
        config: ProviderConfig;
        modelId?: string;
      }>,
    ) => {
      state.configuredProviders.push(action.payload);
    },
    removeProvider: (state, action: PayloadAction<string>) => {
      state.configuredProviders = state.configuredProviders.filter(
        (p) => p.provider.id !== action.payload,
      );
    },
  },
});

export const {
  selectProvider,
  updateProviderConfig,
  selectModel,
  addConfiguredProvider,
  removeProvider,
} = byokSlice.actions;

export const selectBYOKState = (state: { byok: BYOKState }) => state.byok;