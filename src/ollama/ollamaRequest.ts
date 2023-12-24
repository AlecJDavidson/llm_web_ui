import { OllamaResponse, OllamaRequest} from "../interfaces/ollamaInterfaces";

const concatenateCompletion = (completionArray: OllamaResponse[]): string => {
  let result: string = '';
  for (const content of completionArray) {
    if (content.message && content.message.content) {
      result += content.message.content;
    }
  }
  return result.trim();
}

export const ollamaRequest = async (promptRequest: OllamaRequest) => {
  const url = 'http://localhost:11434/api/chat';
  const data = {
    model: 'mistral',
    messages: [
      { role: promptRequest.messages.role, content: promptRequest.messages.content }
    ]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const text = await response.text();
  const lines = text.trim().split('\n');

  let ollamaResponses: OllamaResponse[] = [];
  let completion: string;

  for (const line of lines) {
    const result = JSON.parse(line);
    ollamaResponses.push(result);
  }

  completion = concatenateCompletion(ollamaResponses);
  console.log("Prompt: ", promptRequest.messages.content);
  console.log("Completion: ", completion);
  return completion;
}



