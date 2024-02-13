import React from 'react';
import { IconButton } from '@mui/material';
import { Google } from '@mui/icons-material';

function SignInButton() {
  return (
    <IconButton edge="end" color="inherit" aria-label="sign-in">
      <Google />
    </IconButton>
  );
}

export default SignInButton;
