import { combineReducers } from 'redux';
import taskReducer from './Task/TaskReducer';
import userReducer from './User/UserReducer';
import docuementReducer from './Document/DocumentReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  users: userReducer,
  documents : docuementReducer
});

export default rootReducer;
