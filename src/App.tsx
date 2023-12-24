import React, { useState } from 'react';
import { ollamaRequest } from './ollama/ollamaRequest';
import { OllamaRequest } from './interfaces/ollamaInterfaces';
import { ChatObject} from './interfaces/chatInterfaces';
import './App.css';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [completionHistory, setCompletionHistory] = useState<string[]>([]);
  const [chatLog, setChatLog] = useState<ChatObject[]>([]);
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

      let chatObject: ChatObject = { prompt, completion: response }
      setChatLog([...chatLog, chatObject]);

      // Clear the prompt and completion after submission
      setPrompt('');
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
                  {`You: ${chat.prompt}`}
                  <br />
                  <br />
                  {`Ai: ${chat.completion}`}
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
            {!loading ? "submit" : "...loading"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

