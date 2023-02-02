import { combineReducers } from 'redux';
import taskReducer from './Task/TaskReducer';
import userReducer from './User/UserReducer';
import docuementReducer from './Document/DocumentReducer';
import externalProviderReducer from './ExternalProvider/ExternalProviderReducer';


const rootReducer = combineReducers({
  tasks: taskReducer,
  users: userReducer,
  documents : docuementReducer,
  externalProviders : externalProviderReducer
});

export default rootReducer;
