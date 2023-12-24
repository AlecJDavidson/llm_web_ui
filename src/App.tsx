import React, { useState } from 'react';
import { ollamaRequest } from './ollama/ollamaRequest';
import { ChatObject, ChatLogObject, ChatLogHistoryObject } from './interfaces/chatInterfaces';
import { OllamaRequest } from './interfaces/ollamaInterfaces';
import './App.css';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [completion, setCompletion] = useState<string>('');
  const [chatLog, setChatLog] = useState<ChatLogObject>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    if (prompt.trim() !== '') {
      setChatLog([...chatLog, prompt]);
      let request: OllamaRequest = {
        model: 'mistral',
        messages:
          { "role": "user", "content": prompt }

      }

      ollamaRequest(request);
      console.log(ollamaRequest);
      setPrompt('');
    }
  };

  return (
    <div className="app-container">
      <div className="box">
        <div className="chat-log-box">
          <ul>
            {chatLog.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type a prompt to your local LLM..."
            value={prompt}
            onChange={handleInputChange}
            className="text-input"
          />
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

