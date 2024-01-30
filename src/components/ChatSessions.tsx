// ChatSessions.tsx
import React from 'react';

interface ChatSessionsProps{
  // prompt: string;
  // setPrompt: Function;
  // chatLog: ChatObject[];
  // setChatLog: Function;
  handleSubmit: Function;
  darkMode: boolean;
  toggleDarkMode: () => void;
}



const ChatSessions: React.FC<ChatSessionsProps > = () => {
  return (<div className="chat-sessions-box"><ul><li>list item</li><li>list item</li><li>list item</li><li>list item</li><li>list item</li></ul></div>)

}
export default ChatSessions;

