// ChatLog.tsx
import React from 'react';
import { ChatObject } from '../interfaces/chatInterfaces';
import CodeComponent from './CodeComponent';

interface ChatLogProps {
  chatLog: ChatObject[];
}

const formatNumberedList = (text: string) => {
  const lines = text.split('\n');
  const formattedLines = lines.map((line, index) => {
    if (/^\d+\./.test(line.trim())) {
      const [listNumber, ...restOfLine] = line.split('. ');
      return (
        <React.Fragment key={index}>
          {listNumber}.) {restOfLine.join('. ')}<br /><br />
        </React.Fragment>
      );
    }
    return <React.Fragment key={index}>{line}<br /></React.Fragment>;
  });
  return formattedLines;
};

const ChatLog: React.FC<ChatLogProps> = ({ chatLog }) => {
  const renderCodeBlock = (code: string, index: number) => {
    return <CodeComponent key={index}><pre>{code}</pre></CodeComponent>;
  };

  return (
    <div className="chat-log-box">
      <ul>
        {chatLog.map((chat, chatIndex) => (
          <div key={chatIndex}>
            <li className="chat-message-container">
              {`You: ${chat.prompt}`}
              <br />
              <br />
              {`Model: `}
              {chat.completion.split('```').map((part, partIndex) => (
                partIndex % 2 === 0 ? (
                  <React.Fragment key={partIndex}>{formatNumberedList(part)}</React.Fragment>
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

