import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Login = (): JSX.Element => {
  return (
    <>
      <TextField required variant="standard" label="Username" />
      <TextField
        required
        variant="standard"
        label="Password"
        sx={{
          marginBottom: '30px',
        }}
      />
      <Button variant="contained">Log In</Button>
    </>
  );
};
