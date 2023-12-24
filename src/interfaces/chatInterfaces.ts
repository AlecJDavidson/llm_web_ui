// Interfaces for Chat UI

// For use when displaying the messages back and forth between 
// the prompts and the completion responses.
export interface ChatObject {
  prompt: string;
  completion: string;
}

// For use in keeping a history chat 
// objects displayed in the webUI 
export interface ChatLogObject {
  chatLog: ChatObject[];
}

// For use in keeping a log history of the
// sessions between chats IE: Chat1, Chat2, Chat3, etc.
export interface ChatLogHistoryObject {
  chatLogHistory: ChatLogObject[]
}