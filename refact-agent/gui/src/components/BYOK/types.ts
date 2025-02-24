export interface ModelCapabilities {
  supportsTools: boolean;
  supportsImages: boolean;
  supportsComputerUse: boolean;
}

export interface ModelPricing {
  supportsPromptCaching: boolean;
  maxOutputTokens: number;
  cacheWritePrice?: number; // per million tokens
  cacheReadPrice?: number;  // per million tokens
  outputPrice?: number;     // per million tokens
}

export interface LLMModel {
  id: string;
  name: string;
  capabilities: ModelCapabilities;
}

export interface ProviderConfig {
  apiKey?: string;
  endpoint?: string;
  models?: LLMModel[];
}

export interface LLMProvider {
  id: string;
  name: string;
  description?: string;
  isCustom?: boolean;
  configComponent?: React.ComponentType<ProviderConfigProps>;
  supportedModels?: LLMModel[];
}

