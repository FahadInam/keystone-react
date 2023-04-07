// userReducer.js
const initialState = {
    firstName: '',
    lastName: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FIRST_NAME':
        return { ...state, firstname: action.firstname };
  
      case 'SET_LAST_NAME':
        return { ...state, lastname: action.lastname };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  