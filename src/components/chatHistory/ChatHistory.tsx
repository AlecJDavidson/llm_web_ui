import React from 'react';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

// TODO: put this somewhere else or import from context
interface ChatObject {
  prompt: string;
  completion: string;
}

export interface ChatHistoryObject {
  chatLog: ChatObject[];
}



export const ChatHistory: React.FC = ({chatHistory}: ChatHistoryObject) => {
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

