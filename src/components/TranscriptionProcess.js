import { useState, useEffect } from 'react';
import { Box, LinearProgress } from '@mui/material';
import TranscriptionResult from './TranscriptionResult.js';

function TranscriptionProcess({onTranscribeAnotherVideo}) {
  const [transcriptionInProgress, setTranscriptionInProgress] = useState(true);
  const [transcript, setTranscript] = useState("");

  // Simulate transcription process with useEffect
  useEffect(() => {
    // Simulating a transcription process with a setTimeout
    const transcriptionTimeout = setTimeout(() => {
      // Once transcription is complete, set transcriptionInProgress to false
      setTranscriptionInProgress(false);
      setTranscript("hello!");
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(transcriptionTimeout);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>
      {transcriptionInProgress ? (
        <LinearProgress color="inherit" sx={{ width: '50%', minWidth: '200px' }} />
      ) : (
        <TranscriptionResult transcript={transcript} onTranscribeAnotherVideo={onTranscribeAnotherVideo}/>
      )}
    </Box>
  );
}

export default TranscriptionProcess;
