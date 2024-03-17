import React, {useState} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function TranscriptionResult({ transcript , onTranscribeAnotherVideo}) {
  const [editTranscript, setTranscript] = useState(transcript);

  const handleExportTxtFile = () => {
    // Create a Blob containing the transcript text
    const blob = new Blob([editTranscript], { type: 'text/plain' });
  
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'transcript.txt';
  
    // Append the anchor element to the document body and click it programmatically
    document.body.appendChild(a);
    a.click();
  
    // Clean up by removing the anchor element from the document body
    document.body.removeChild(a);
  };
  
  const handleTranscribeAnotherVideo = () => {
    onTranscribeAnotherVideo();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography 
        variant="h6">
          Transcription Complete!</Typography>
      <br></br>
      <Button onClick={handleTranscribeAnotherVideo} variant="outlined" color="primary">
        Transcribe Another Video
      </Button>
      <TextField
        id="transcript-text"
        label="Transcript"
        variant="outlined"
        multiline
        rows={6}
        value={editTranscript}
        fullWidth
        onChange= {(e) => setTranscript(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />
      <Button 
        onClick={handleExportTxtFile} 
        variant="contained" 
        color="primary" 
        sx={{ marginBottom: '10px' }}>
          Export as txt file
      </Button>
      
    </Box>
  );
}

export default TranscriptionResult;
