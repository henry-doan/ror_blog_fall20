import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import CommentProvider from './providers/CommentProvider';

ReactDOM.render(
  <React.StrictMode>

    <CommentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CommentProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
