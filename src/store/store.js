// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

const initialState = {
  email: '',
};

const emailReducer  = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.email };
      
      case 'SET_FORGOT_EMAIL':
        return { ...state, email: action.email };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  email: emailReducer,
  user: userReducer,
});


const store = createStore(rootReducer);

export default store;
