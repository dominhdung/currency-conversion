import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import createSaga from 'redux-saga';
import rootReducer from '../reducers/reducers';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSaga();
const middleware = [sagaMiddleware];
let composeEnhancers = compose;

middleware.push(createLogger());
composeEnhancers = composeWithDevTools;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;