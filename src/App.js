import React from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';
import TranscriptionForm from './components/TranscriptionForm';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            YouTube Transcription Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ paddingTop: '40px' }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          YouTube Transcription Generator
        </Typography>
        <TranscriptionForm />
      </Container>
    </div>
  );
}

export default App;
