
import { createStore, combineReducers, applyMiddleware } from 'redux';
import UserReducer from '../Redux/Reducers/UserReducer'
import UserForm from '../UserForm';
// import cartReducer from '../reducers/cartReducer'
// import { changeFirstName, changeLastName, getAllQuoteFromServer } from '../../Middleware/crud'
// import { actions } from '../Redux/action';


const reducer = combineReducers({UserReducer})
const store = createStore(reducer, applyMiddleware())
window.store = store
export default store

