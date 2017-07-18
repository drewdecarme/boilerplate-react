import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './index.reducer';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./app/ducks/index.duck.js', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
