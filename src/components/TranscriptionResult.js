import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function TranscriptionResult({ transcript , onTranscribeAnotherVideo}) {
  const [editedTranscript, setEditedTranscript] = useState(transcript);

  const handleExportGoogleDoc = async () => {
    // Encode the transcript text
    const transcriptEncoded = encodeURIComponent(editedTranscript);
  
    // Make a POST request to the Google Apps Script web app
    const response = await fetch('https://script.google.com/macros/s/AKfycbyZJN5T7Z9qTinp2_yfY124a5cpp-zevL1WJP31v68g4eUcgIVk_u-1rzyYNFxRqYEZRg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: transcriptEncoded })
    });
  
    // Handle the response
    if (response.ok) {
      const googleDocId = await response.text();
      window.open(`https://docs.google.com/document/d/${googleDocId}`, '_blank');
    } else {
      console.error('Failed to create Google Doc');
    }
  };
  
  const handleExportTxtFile = () => {
    // Create a Blob containing the transcript text
    const blob = new Blob([editedTranscript], { type: 'text/plain' });
  
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
      <Typography variant="h6">Transcription Complete!</Typography>
      <Button onClick={handleTranscribeAnotherVideo} variant="outlined" color="primary">
        Transcribe Another Video
      </Button>
      <TextField
        id="transcript-text"
        label="Transcript"
        variant="outlined"
        multiline
        rows={6}
        value={editedTranscript}
        onChange={(e) => setEditedTranscript(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      {/* <Button onClick={handleExportGoogleDoc} variant="contained" color="primary" sx={{ marginBottom: '10px' }}>
        Export as Google Doc
      </Button> */}
      <Button onClick={handleExportTxtFile} variant="contained" color="primary" sx={{ marginBottom: '10px' }}>
        Export as txt file
      </Button>
      
    </Box>
  );
}

export default TranscriptionResult;
