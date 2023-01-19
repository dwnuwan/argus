import { combineReducers } from 'redux';
import taskReducer from './Task/TaskReducer';
import userReducer from './User/UserReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  users: userReducer,
});

export default rootReducer;
