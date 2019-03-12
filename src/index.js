import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reducers from './reducers/rootReducer';
import reduxPromise from 'redux-promise';

const middleware = applyMiddleware(reduxPromise);

const theStore = middleware(createStore);

const theMiddleWareAndReducersStore = theStore(reducers);



ReactDOM.render(
    <Provider store={theMiddleWareAndReducersStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

