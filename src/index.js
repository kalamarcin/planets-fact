import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStore from './Store/GlobalStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStore>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GlobalStore>
  </React.StrictMode>
);


