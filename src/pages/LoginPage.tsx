import React from 'react';
import Typography from '@mui/material/Typography';

import { AuthLayout } from '@layouts';
import { Login } from '@features/auth';

import styles from './Pages.module.css';

export const LoginPage = (): JSX.Element => {
  return (
    <AuthLayout>
      <div className={styles.login_page}>
        <Typography
          align="center"
          variant="h5"
          sx={{
            marginBottom: '10px',
          }}
        >
          Lk Account Login
        </Typography>

        <Login />
      </div>
    </AuthLayout>
  );
};
