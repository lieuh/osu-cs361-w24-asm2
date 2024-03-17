import { useState, useEffect } from 'react';
import { Box, LinearProgress } from '@mui/material';
import TranscriptionResult from './TranscriptionResult.js';

function TranscriptionProcess({onTranscribeAnotherVideo, transcript}) {
  const [transcriptionInProgress, setTranscriptionInProgress] = useState(true);

  // Simulate transcription process with useEffect
  useEffect(() => {
    const transcriptionTimeout = setTimeout(() => {
      // Once transcription is complete, set transcriptionInProgress to false
      setTranscriptionInProgress(false);
    }, 8000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(transcriptionTimeout);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>
      {transcriptionInProgress ? (
        <LinearProgress 
          color="inherit" 
          sx={{ width: '50%', minWidth: '200px' }} />
      ) : (
        <TranscriptionResult transcript={transcript} onTranscribeAnotherVideo={onTranscribeAnotherVideo}/>
      )}
    </Box>
  );
}

export default TranscriptionProcess;
