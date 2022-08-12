import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return <div>{children}</div>;
};
