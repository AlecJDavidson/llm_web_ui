// ChatInput.tsx
import React, { useState } from 'react';
import { ChatObject } from '../interfaces/chatInterfaces';

interface ChatInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setChatLog: React.Dispatch<React.SetStateAction<ChatObject[]>>;
}

const ChatInput: React.FC<ChatInputProps> = ({ prompt, setPrompt, handleSubmit, darkMode, toggleDarkMode, setChatLog }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleInternalSubmit = async () => {
    setLoading(true);

    await handleSubmit();

    setLoading(false);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type a prompt to your local LLM..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="text-input"
      />
      <div>
        <button onClick={handleInternalSubmit} className="submit-button">
          {!loading ? 'Submit' : '...Loading'}
        </button>
      </div>
      <div>
        <button onClick={toggleDarkMode} className="toggle-dark-mode">
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

