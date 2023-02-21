import { combineReducers } from 'redux';
import taskReducer from './Task/TaskReducer';
import userReducer from './User/UserReducer';
import docuementReducer from './Document/DocumentReducer';
import externalProviderReducer from './ExternalProvider/ExternalProviderReducer';
import projectReducer from './Project/ProjectReduer';



const rootReducer = combineReducers({
  tasks: taskReducer,
  users: userReducer,
  documents : docuementReducer,
  externalProviders : externalProviderReducer,
  projects: projectReducer
});

export default rootReducer;
