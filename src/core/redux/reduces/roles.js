import {SET_ROLES_USER} from '../actions/types' 
const initialState = {
  roles: {
    administrador: false,
    editor: false,
    user: false
  }
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case SET_ROLES_USER:
      return {
        roles: action.roles
      }
    default: return state
  }
}