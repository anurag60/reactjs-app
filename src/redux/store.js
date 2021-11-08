import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';
// import rolesReducer from './reducer'

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "developemnt") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(logger, reduxThunk));
console.log(store);

export default store;