import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </>
);
