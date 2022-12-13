import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import {store} from './store/store';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <BrowserRouter> <App/></BrowserRouter>
  </Provider>
  </React.StrictMode>
);
reportWebVitals();
