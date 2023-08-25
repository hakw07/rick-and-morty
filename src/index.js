import React from 'react';
import ReactDOM from 'react-dom/client';

// context
import AppContextProvider from './context/AppContextProvider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);