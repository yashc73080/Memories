import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import reducers from './reducers';

import App from './App';

// Setup redux
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Connecting to the div with ID of root
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
// Provider from Redux keeps tracks of the store as a global state so we can access it from anywhere in the app