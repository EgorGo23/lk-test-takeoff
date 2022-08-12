import React from 'react';

import styles from './Layouts.module.css';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return <div className={styles.auth_layout}>{children}</div>;
};
