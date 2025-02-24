import { DeepSeekConfig } from './DeepSeekConfig';
import { OpenAIConfig } from './OpenAIConfig';
import { MistralConfig } from './MistralConfig';
import { LMStudioConfig } from './LMStudioConfig';
import { BedrockConfig } from './BedrockConfig';
import { OpenRouterConfig } from './OpenRouterConfig';
import { GeminiConfig } from './GeminiConfig';
import { OllamaConfig } from './OllamaConfig';
import type { LLMProvider } from '../types';

export const DEFAULT_PROVIDERS: LLMProvider[] = [
  { 
    id: 'lm-studio', 
    name: 'LM Studio', 
    description: 'Local LM Studio instance',
    configComponent: LMStudioConfig
  },
  { 
    id: 'aws-bedrock', 
    name: 'AWS Bedrock', 
    description: 'Amazon Web Services Bedrock',
    configComponent: BedrockConfig
  },
   { 
    id: 'google-gemini', 
    name: 'Google Gemini', 
    description: 'Google Gemini API',
    configComponent: GeminiConfig
  },
  { 
    id: 'deepseek', 
    name: 'DeepSeek', 
    description: 'DeepSeek API',
    configComponent: DeepSeekConfig
  },
  { 
    id: 'mistral', 
    name: 'Mistral', 
    description: 'Mistral AI API',
    configComponent: MistralConfig
  },
  { 
    id: 'openai', 
    name: 'OpenAI', 
    description: 'Official OpenAI API',
    configComponent: OpenAIConfig
  },
  { 
    id: 'openrouter', 
    name: 'OpenRouter', 
    description: 'OpenRouter API',
    configComponent: OpenRouterConfig
  },
  { id: 'vscode-lm', name: 'VS Code LM API', description: 'VS Code Language Model API' },
  {
    id: 'ollama',
    name: 'Ollama',
    description: 'Local Ollama instance',
    configComponent: OllamaConfig
  }
];