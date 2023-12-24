// App.tsx
import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import './App.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <ChatContainer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;

