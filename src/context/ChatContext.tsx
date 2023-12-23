// ChatContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

export interface ChatObject {
  prompt: string;
  completion: string;
}

interface ChatContextProps {
  chatObject: ChatObject;
  setChatObject: React.Dispatch<React.SetStateAction<ChatObject>>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [chatObject, setChatObject] = React.useState<ChatObject>({
    prompts: [],
    completions: [],
  });

  return (
    <ChatContext.Provider value={{ chatObject, setChatObject }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

