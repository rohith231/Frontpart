import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import flight from './flight';


export default combineReducers({
  alert,
  auth,
  flight,
  
});
