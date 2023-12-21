import { Input, Stack, Button } from '@mui/joy';
import { useState } from 'react';


function PromptInput() {

  const [promptInput, setPromptInput]: any = useState('');

  // Event handler for input change
  const handleInputChange = (event: any) => {
    setPromptInput(event.target.value);
  };

  const clearInputBox = () => {
    setPromptInput('');
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
          console.log(promptInput);
          clearInputBox();
        }
      }}
    >
      <Stack spacing={1}>
        <Input placeholder="Ask a question to your local LLM" value={promptInput} required onChange={handleInputChange} />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}

export default PromptInput 
