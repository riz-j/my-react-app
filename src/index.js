import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Testing from './Testing'
import ArrayMap from './array_map.js'
import DisplayFamGuy from './DisplayFamGuy';
import Section2App from './Section2App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Section2App />
    {/* <DisplayFamGuy /> */}
    {/* <ArrayMap /> */}
    {/* <App /> */} 
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
