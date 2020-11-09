import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './components/context/global-state';
import reducer,{INITIAL_STATE} from './components/context/reducer';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
    <App />
    </StateProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
