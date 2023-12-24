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

    await handleSubmit(); // LSP says that await has no effect, that is a lie. The "...loading" state will not behave correctly without it.

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
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

