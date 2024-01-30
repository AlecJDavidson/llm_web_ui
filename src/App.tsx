// App.tsx
import React, { useState, useEffect } from 'react';
import ChatContainer from './components/ChatContainer';
import { OllamaRequest } from './interfaces/ollamaInterfaces';
import { ollamaRequest } from './ollama/ollamaRequest';
import { ChatObject } from './interfaces/chatInterfaces';
import { llm_model } from '../modelConfig.ts';
import { readLocalStorage, setLocalStorage } from './localStorage/localStorage.ts';
import './App.css';

const test: string[] = ["string", "array"];
console.log(test);

const App: React.FC = () => {
  // Load theme from localStorage, default to false if not found
  const [darkMode, setDarkMode] = useState<boolean>(
    readLocalStorage('theme') === 'true'
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);

    // Update localStorage value
    // TODO: Move this to user stored settings when available
    setLocalStorage('theme', newDarkMode.toString());
  };

  const [prompt, setPrompt] = useState<string>('');

  const storedChatLog = readLocalStorage('chatLog');
  const parsedChatLog = storedChatLog ? JSON.parse(storedChatLog) : null;

  const [chatLog, setChatLog] = useState<ChatObject[]>(parsedChatLog || []);

  const handleSubmit = async () => {
    if (prompt.trim() !== '') {
      const promptRequest: OllamaRequest = {
        model: llm_model,
        messages: { role: 'user', content: prompt },
      };

      try {
        setPrompt('');
        const response = await ollamaRequest(promptRequest);

        const chatObject: ChatObject = { prompt, completion: response };
        setChatLog([...chatLog, chatObject]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  // Add useEffect to ensure dark mode is applied on component mount
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <ChatContainer
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        prompt={prompt}
        setPrompt={setPrompt}
        chatLog={chatLog}
        setChatLog={setChatLog}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;

