import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar } from '@mui/material';
import TranscriptionProcess from './TranscriptionProcess.js';
import axios from 'axios';

function TranscriptionForm() {
  const [open, setOpen] = useState(false); // Snackbar
  const [transcriptionStarted, setTranscriptionStarted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const handleStartTranscription = async (event) => {
    event.preventDefault();
    const youtubeLink = event.target.elements['youtube-link'].value;

    // Regular expression to match YouTube video URLs
    const youtubeRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;

    if (youtubeRegex.test(youtubeLink)) {
      setOpen(true);
      setHidden(true);
      setTranscriptionStarted(true);

      try {
        const response = await axios.post('http://localhost:5555/speechToText', { link: youtubeLink });
        console.log("Transcription complete!");

        if (response.status === 200) {
          setTranscript(response.data);
          console.log("Transcript:", response.data);
        } else {
          throw new Error('Failed to transcribe video');
        }
      } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to transcribe video');
      }
    } else {
      alert('Please enter a valid YouTube link');
    }
  };

  const handleTranscribeAnotherVideo = () => {
    setTranscriptionStarted(false);
    setHidden(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Transcription Started!"
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          visibility: hidden ? 'hidden' : 'visible'
        }}
      >
        <form onSubmit={handleStartTranscription}>
          <TextField
            id="youtube-link"
            label="Enter YouTube Link"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <Box justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Start Transcription
            </Button>
          </Box>
        </form>
      </Box>
      {transcriptionStarted && <TranscriptionProcess onTranscribeAnotherVideo={handleTranscribeAnotherVideo} transcript={transcript} />}
    </>
  );
}

export default TranscriptionForm;