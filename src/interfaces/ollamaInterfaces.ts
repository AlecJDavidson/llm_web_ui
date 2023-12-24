export interface OllamaRequest{
  model: string;
  messages: {
    role: string;
    content: string;
  }
}

export interface OllamaMessage {
  role: string;
  content: string;
  images: null | any;
}

export interface OllamaResponse {
  model: string;
  created_at: string;
  message: OllamaMessage;
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

