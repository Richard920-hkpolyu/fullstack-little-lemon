import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScreenSizeProvider from "./context/ScreenSizeContext";
import { Provider } from 'react-redux'
import store from './store.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScreenSizeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
