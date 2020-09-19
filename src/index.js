import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

serviceWorker();

