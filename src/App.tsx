// App.tsx
import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import { OllamaRequest } from './interfaces/ollamaInterfaces';
import { ollamaRequest } from './ollama/ollamaRequest';
import { ChatObject } from './interfaces/chatInterfaces';
import './App.css';
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [chatLog, setChatLog] = useState<ChatObject[]>([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleSubmit = async () => {
    if (prompt.trim() !== '') {
      const promptRequest: OllamaRequest = {
        model: 'mistral',
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
