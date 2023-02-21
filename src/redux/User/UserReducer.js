const initialState = {
  users: [],
  usersOfSelectedCompany: [],
  
  user:null,
    tktOwner : null,
    login : (localStorage.getItem("Token") != null ) ? true : false 
};

const userReducer = (state = initialState, action) => {
  console.log(action.payload + 'payload');
  console.log(action.type);
  if (action.type == 'FETCH_USERS_FULFILLED') {
   
    return {
      ...state,
      users: action.payload,
    };
  } else if (action.type == 'DELETE_USER_FULFILLED') {
    return {
      ...state,
      brands: [...state.users, action.payload],
    };
  } else if (action.type == 'LOG_USERS_FULFILLED') {
    console.log(action.payload.token);
    localStorage.setItem('Token', action.payload.token)
    return {
      ...state,
      user: action.payload.user,
      login : true
      
    };
  }
  else {
    return state;
  }
};

export default userReducer;
