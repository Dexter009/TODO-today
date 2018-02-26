import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
  
var destination = document.querySelector("#root");
  
ReactDOM.render(
    <div>
        <App/>
    </div>,
    destination
);