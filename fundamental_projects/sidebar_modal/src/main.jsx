import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ToggleContext from './context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleContext>
      <App />
    </ToggleContext>
  </StrictMode>
);