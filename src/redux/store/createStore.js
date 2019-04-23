import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLoger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from '../reducers/rootReducer';

const configureStore = preloadedState => {
  // const loggerMiddleware = createLoger();
  const middlewares = [thunkMiddleware];

  //  if (process.env.NODE_ENV === 'development') {
  //   middlewares.push(loggerMiddleware);
  // }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/rootReducer', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
};

export default configureStore;
