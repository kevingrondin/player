import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/app.scss";

const g = "color:#00000;font-weight:bold;font-size:20px;";
const hello =
  "%c 👋 Hello, \n\n 🕵🏻‍♂️ Consulting. \n 👨🏻‍💻 Développement. \n 🤙 https://www.linkedin.com/in/kevin-grondin/";
console.info(hello, g);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
