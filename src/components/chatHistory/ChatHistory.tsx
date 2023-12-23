import React from 'react';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

export interface ChatObject {
  prompt: string;
  completion: string;
}

interface ChatHistory {
  chatLog: ChatObject[];
}

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

export const ChatHistory: React.FC = () => {
  return (
    <Box borderRadius={2}  boxShadow={3} p={1} mb={2} minHeight={'700px'}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            {chatHistory.map((chatObject, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Box>
                      <div>
                        <strong>Prompt:</strong> {chatObject.prompt}
                      </div>
                      <div>
                        <strong>Completion:</strong> {chatObject.completion}
                      </div>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

