import { Input, Stack, Button } from '@mui/joy';
import { useState } from 'react';
import ollamaRequest from '../../ollama/requests';
import { promptRequest } from '../../ollama/requests';


function PromptInput() {

  const [promptInput, setPromptInput]: any = useState('');

  // Event handler for input change
  const handleInputChange = (event: any) => {
    setPromptInput(event.target.value);
  };

  const clearInputBox = () => {
    setPromptInput('');
  }

  const promptRequstObject: promptRequest = {
    model: 'mistral',
    messages:
      { "role": "user", "content": promptInput }

  }

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
          ollamaRequest(promptRequstObject)
          clearInputBox();
        }
      }}
    >
      <Stack spacing={1.5}>
        <Input placeholder="Ask a question to your local LLM" value={promptInput} required onChange={handleInputChange} />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}

export default PromptInput 
