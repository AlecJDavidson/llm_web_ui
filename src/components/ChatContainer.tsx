// ChatContainer.tsx
import React, { useState } from 'react';
import { ollamaRequest } from '../ollama/ollamaRequest';
import { OllamaRequest } from '../interfaces/ollamaInterfaces';
import { ChatObject } from '../interfaces/chatInterfaces';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

interface ChatContainerProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ darkMode, toggleDarkMode }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [chatLog, setChatLog] = useState<ChatObject[]>([]);

const handleSubmit = async () => {
    if (prompt.trim() !== '') {
      let promptRequest: OllamaRequest = {
        model: 'mistral',
        messages: { role: 'user', content: prompt },
      };

      // Use await to get the completion asynchronously
      const response = await ollamaRequest(promptRequest);

      // Update state after receiving the response

      // Update chatLog with a new object containing prompt and completion

      let chatObject: ChatObject = { prompt, completion: response }
      setChatLog([...chatLog, chatObject]);

      // Clear the prompt and completion after submission
      setPrompt('');
    }
  };


  return (
    <div className="box">
      <ChatLog chatLog={chatLog} />
      <ChatInput
        prompt={prompt}
        setPrompt={setPrompt}
        handleSubmit={handleSubmit}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

export default ChatContainer;

