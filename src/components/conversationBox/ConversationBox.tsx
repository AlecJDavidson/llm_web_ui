import { Box, Stack } from "@mui/joy";
import PromptOutput from "../promptOutput/PromptOutput";
import PromptInput from "../promptInput/PromptInput";


const ConversationBox = () => {
  return (
    <Box>
      <Stack spacing={1.5}>
        <PromptOutput />
        <PromptInput />
      </Stack>
    </Box>
  )

}
export default ConversationBox
