// ChatContainer.tsx
import React, { useEffect } from 'react';
import { ChatObject } from '../interfaces/chatInterfaces';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

interface ChatContainerProps {
  prompt: string;
  setPrompt: Function;
  chatLog: ChatObject[];
  setChatLog: Function;
  handleSubmit: Function;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  prompt,
  setPrompt,
  chatLog,
  setChatLog,
  handleSubmit,
  darkMode,
  toggleDarkMode,
}) => {
  // Effect to persist chatLog to local storage
  useEffect(() => {
    localStorage.setItem('chatLog', JSON.stringify(chatLog));
  }, [chatLog]);


  useEffect(() => {
    try {
      const storedChatLog = localStorage.getItem('chatLog');
      console.log('Stored chat log:', storedChatLog);

      if (storedChatLog) {
        setChatLog(JSON.parse(storedChatLog));
      }
    } catch (error) {
      console.error('Error loading chatLog from local storage:', error);
    }
  }, []); // Empty dependency array ensures this runs only on mount


  const handleFormSubmit = async () => {
    await handleSubmit(); // Ensure the state is updated before persisting to local storage
  };




  return (
    <div className="box">
      <ChatLog chatLog={chatLog} />
      <ChatInput
        prompt={prompt}
        setPrompt={setPrompt}
        handleSubmit={handleFormSubmit}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};

export default ChatContainer;

