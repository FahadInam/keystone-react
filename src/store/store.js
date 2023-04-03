// store.js
import { createStore } from 'redux';

const initialState = {
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.email };
      
      case 'SET_FORGOT_EMAIL':
        return { ...state, email: action.email };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
