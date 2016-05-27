import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form';

const reducers = {
  form: formReducer,
}

const reducer = combineReducers(reducers);

export default createStore(reducer, {}, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
