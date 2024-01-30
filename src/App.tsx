// App.tsx
import React, { useState, useEffect } from 'react';
import ChatContainer from './components/ChatContainer';
import ChatSessions from './components/ChatSessions.tsx';
import { OllamaRequest } from './interfaces/ollamaInterfaces';
import { ollamaRequest } from './ollama/ollamaRequest';
import { ChatObject } from './interfaces/chatInterfaces';
import { llm_model } from '../modelConfig.ts';
import './App.css';

const test: string[] = ["string", "array"];
console.log(test);

const App: React.FC = () => {
  // Load theme from localStorage, default to false if not found
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('theme') === 'true'
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);

    // Update localStorage value
    // TODO: Move this to user stored settings when available
    localStorage.setItem('theme', newDarkMode.toString());
  };

  const [prompt, setPrompt] = useState<string>('');

  const storedChatLog = localStorage.getItem('chatLog');
  const parsedChatLog = storedChatLog ? JSON.parse(storedChatLog) : null;

  const [chatLog, setChatLog] = useState<ChatObject[]>(parsedChatLog || { chatLog: [] });

  const handleSubmit = async () => {
    if (prompt.trim() !== '') {
      const promptRequest: OllamaRequest = {
        model: llm_model,
        messages: { role: 'user', content: prompt },
      };

      try {
        const response = await ollamaRequest(promptRequest);

        const chatObject: ChatObject = { prompt, completion: response };
        setChatLog([...chatLog, chatObject]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setPrompt('');
    }
  };

  // Add useEffect to ensure dark mode is applied on component mount
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <ChatSessions
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleSubmit={() => console.log('nothing to submit')}
      />
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

