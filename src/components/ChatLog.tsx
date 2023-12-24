// ChatLog.tsx
import React from 'react';
import { ChatObject } from '../interfaces/chatInterfaces';

interface ChatLogProps {
  chatLog: ChatObject[];
}

const ChatLog: React.FC<ChatLogProps> = ({ chatLog }) => {
  return (
    <div className="chat-log-box">
      <ul>
        {chatLog.map((chat, chatIndex) => (
          <div className="chat-message-container" key={chatIndex}>
            <li>
              {`You: ${chat.prompt}`}
              <br />
              <br />
              {`Model: ${chat.completion}`}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatLog;

