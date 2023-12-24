// ChatLog.tsx
import React from 'react';
import { ChatObject } from '../interfaces/chatInterfaces';
import CodeComponent from './CodeComponent';

interface ChatLogProps {
  chatLog: ChatObject[];
}

const ChatLog: React.FC<ChatLogProps> = ({ chatLog }) => {

  const renderCodeBlock = (code: string, index: number) => {
    return <CodeComponent key={index}><pre>{code}</pre></CodeComponent>;
  };

  return (
    <div className="chat-log-box">
      <ul>
        {chatLog.map((chat, chatIndex) => (
          <div className="chat-message-container" key={chatIndex}>
            <li>
              {`You: ${chat.prompt}`}
              <br />
              <br />
              {`Model: `}
              {chat.completion.split('```').map((part, partIndex) => (
                partIndex % 2 === 0 ? (
                  <span key={partIndex}><br/>{part}<br/></span>
                ) : (
                  renderCodeBlock(part, partIndex)
                )
              ))}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatLog;

