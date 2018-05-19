import React from 'react';  
import { render } from 'react-dom';  
import store from './store';  
import { Provider } from 'react-redux';  
import App from './container/App';
import { BrowserRouter } from 'react-router-dom'


render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);