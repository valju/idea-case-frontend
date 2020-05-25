import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

//import './index.css';
//import CssBaseline from '@material-ui/core/CssBaseline';
import { CssBaseline } from '@material-ui/core';
import theme from "./stylings/theme/theme";

import {ThemeProvider} from '@material-ui/core/styles';


import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer(),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
 );



function Index () {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <App />
        </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(
    <Index />
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
