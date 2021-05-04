import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'


const rootReducer =combineReducers({})

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState());

export default store;