import { Box, Stack } from "@mui/joy";
import PromptInput from "../promptInput/PromptInputTextBox";
import { ChatHistory, ChatHistoryObject } from "../chatHistory/ChatHistory";

// Temp data
const submission01: ChatObject = {
  prompt: "Please generate three random words.",
  completion: "Sure, the three random words are: boat, airplane, and dinosaur."
}

const submission02: ChatObject = {
  prompt: "Please generate three random words.",
  completion: "Sure, the three random words are: boat, airplane, and dinosaur."
}

const submission03: ChatObject = {
  prompt: "Please generate three random words.",
  completion: "Sure, the three random words are: boat, airplane, and dinosaur."
}

const chatHistory: ChatHistory = [
  submission01, submission02, submission03
]

const ConversationBox = () => {
  return (
    <Box>
      <Stack spacing={1.5}>
        <ChatHistory chatHistory={chatHistory}/>
        <PromptInput />
      </Stack>
    </Box>
  )

}
export default ConversationBox
