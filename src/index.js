import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Route from './routes/index';
import configureStore from './redux/store/createStore';
import preloadedState from './redux/reducers/initialStates';

const store = configureStore(preloadedState);

ReactDom.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app')
);
