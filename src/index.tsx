import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import '@styles/main.css';
import store from '@store';
import { Routes } from './routes';

export const render = (): void => {
  const container = document.getElementById('root');

  const root = createRoot(container!);

  root.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
  );
};

window.addEventListener('load', render);
