export interface promptRequest {

  model: string;
  messages: {
    role: string;
    content: string;
  }
}

interface Message {
  role: string;
  content: string;
  images: null | any; // Update the type accordingly based on your data
}

interface ChatObject {
  model: string;
  created_at: string;
  message: Message;
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

function concatenateContent(responseArray: ChatObject[]): string {


  let result = '';

  for (const content of responseArray) {
    if (content.message && content.message.content) {
      result += content.message.content;
    }
  }

  return result.trim();
}

const chatObjects: ChatObject[] = [
  // Your array of objects goes here
];

const concatenatedContent = concatenateContent(chatObjects);
console.log(concatenatedContent);


const ollamaRequest = async (promptRequest: promptRequest) => {


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

  let responseArray: ChatObject[] = [];
  let responseMessage: string;

  for (const line of lines) {
    const result = JSON.parse(line);
    responseArray.push(result);
  }
  // console.log(responseArray);

  responseMessage = concatenateContent(responseArray);
  console.log(responseMessage)
}





export default ollamaRequest;


