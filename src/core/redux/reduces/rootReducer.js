import { combineReducers} from 'redux';

import auth from './auth';
import roles from './roles';

const rootReducer = combineReducers({
  auth: auth,
  roles: roles
})

export default rootReducer;