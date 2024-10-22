import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line
import AppUiConcept from './App';
// eslint-disable-next-line
import AppReactivityConcept from './App2';
// eslint-disable-next-line
import App from './App';

import App3 from './App3';
import ThemeProvider from './context/ThemeProvider';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppUiConcept /> */}
    {/* <AppReactivityConcept/> */}
    <ThemeProvider>
    <App4/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
