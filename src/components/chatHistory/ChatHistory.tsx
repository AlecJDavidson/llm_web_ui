import { Stack, Textarea } from '@mui/joy';
import { useState } from 'react';

const ChatHistory: React.FC = () => {

  const [completion]: any = useState('');



  return (

    <Stack spacing={1}>
      <Textarea value={completion} minRows={20} />
    </Stack>
  )
}

export default ChatHistory;
