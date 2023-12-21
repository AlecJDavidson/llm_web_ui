import { Box, Stack } from "@mui/joy";
import PromptOutput from "../promptOutput/PromptOutput";
import PromptInput from "../promptInput/PromptInput";


const ConversationBox = () => {
  return (
    <Box>

        <Stack  spacing={2}>
      <PromptOutput />
      <PromptInput />

        </Stack>
    </Box>
  )

}
export default ConversationBox
