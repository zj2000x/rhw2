import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/store';
import Root from './Root';

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <Root
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('root'));