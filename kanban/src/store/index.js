import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import todosReducer from './reducer/TodosReducer'
import itemReducer from './reducer/ItemsReducer'
import userReducer from './reducer/UserReducer'

const rootReducer =combineReducers({
  todos: todosReducer,
  items: itemReducer,
  user: userReducer

})

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState());

export default store;