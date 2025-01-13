import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

// Setup redux
// const store = createStore(reducers, compose(applyMiddleware(thunk)));
const store = configureStore({
    reducer: reducers,
    // By default, Redux Toolkit includes thunk middleware
  });

// Connecting to the div with ID of root
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
// Provider from Redux keeps tracks of the store as a global state so we can access it from anywhere in the app