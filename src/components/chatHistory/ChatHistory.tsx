import { Stack, Textarea, Box } from '@mui/joy';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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

// TODO: Add the chatHistory object back in as an argument


export const ChatHistory: React.FC = () => {
  return (
        <Grid container spacing={2}>
          <Grid item md={12} md={6}>
            <List >
              {chatHistory.map((chatObject, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
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
  );
}



