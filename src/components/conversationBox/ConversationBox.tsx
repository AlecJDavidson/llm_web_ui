import { Box, Stack } from "@mui/joy";
import PromptInput from "../promptInput/PromptInputTextBox";
import { ChatHistory } from "../chatHistory/ChatHistory";


const ConversationBox = () => {
  return (
    <Box>
      <Stack spacing={1.5}>
        <ChatHistory/>
        <PromptInput />
      </Stack>
    </Box>
  )

}
export default ConversationBox
