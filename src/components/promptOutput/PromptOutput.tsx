import { Stack, Textarea } from '@mui/joy';
import { useState } from 'react';

function PromptOutput() {

  const [promptOutput ]: any = useState('');



  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        if (formJson.entries == 0) {
          alert(JSON.stringify(formJson));
        }
        else {
          console.log(promptOutput);
        }
      }}
    >
      <Stack spacing={1}>
        <Textarea value={promptOutput} minRows={20} />
      </Stack>
    </form>
  )
}

export default PromptOutput;
