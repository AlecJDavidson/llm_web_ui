// ChatInput.tsx
import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ChatInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ prompt, setPrompt, handleSubmit, darkMode, toggleDarkMode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleInternalSubmit = async () => {
    setLoading(true);

    await handleSubmit();

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is Enter
    if (e.key === 'Enter') {
      handleInternalSubmit();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type a prompt to your local LLM..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for the Enter key press
        className="text-input"
      />
      <div>
        <button onClick={handleInternalSubmit} disabled={loading} className="submit-button">
          {!loading ? 'Submit' : '...Loading'}
        </button>
      </div>
      <div>
        <button onClick={toggleDarkMode} className="toggle-dark-mode">
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

