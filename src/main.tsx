import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.css";

import { 
  MainPage 
} from './pages';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  );
}
