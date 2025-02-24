import React from 'react';
import ReactDOM from 'react-dom/client'; // تغییر این خط
import App from './App';
import { LanguageProvider } from './context/LanguageContext'; // مسیر رو چک کن
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root')); // استفاده از createRoot
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

