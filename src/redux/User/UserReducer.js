const initialState = {
  users: [],
  usersOfSelectedCompany: [],
};

const userReducer = (state = initialState, action) => {
  console.log(action.type);
  if (action.type == 'FETCH_USERS_FULFILLED') {
    console.log(action.payload + 'payload');
    return {
      ...state,
      users: action.payload,
    };
  } else if (action.type == 'DELETE_USER_FULFILLED') {
    return {
      ...state,
      brands: [...state.users, action.payload],
    };
  } else {
    return state;
  }
};

export default userReducer;
