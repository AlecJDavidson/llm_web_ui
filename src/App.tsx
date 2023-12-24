import React, { useState } from 'react';
import { ollamaRequest } from './ollama/ollamaRequest';
import { OllamaRequest } from './interfaces/ollamaInterfaces';
import { ChatLogObject } from './interfaces/chatInterfaces';
import './App.css';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [completion, setCompletion] = useState<string>('');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [completionHistory, setCompletionHistory] = useState<string[]>([]);
  const [chatLog, setChatLog] = useState<ChatLogObject[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (prompt.trim() !== '') {
      let promptRequest: OllamaRequest = {
        model: 'mistral',
        messages: { role: 'user', content: prompt },
      };

      // Use await to get the completion asynchronously
      const response = await ollamaRequest(promptRequest);

      // Update state after receiving the response
      setPromptHistory([...promptHistory, prompt]);
      setCompletionHistory([...completionHistory, response]);

      // Update chatLog with a new object containing prompt and completion
      setChatLog([...chatLog, { prompt, completion: response }]);

      // Clear the prompt and completion after submission
      setPrompt('');
      setCompletion('');
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="box">
        <div className="chat-log-box">
          <ul>
            {chatLog.map((chat, chatIndex) => (

              <div className="chat-message-container">
                <li key={chatIndex}>
                  {`User: ${chat.prompt}`}
                  <br />
                  <br />
                  {`Mistral: ${chat.completion}`}
                </li>

              </div>
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
           {!loading ? "submit": "...loading"} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

