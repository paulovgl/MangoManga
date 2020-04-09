import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAutenticated : false,
  user:{}
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_CURRENT_USER:     
      return {
        // ...state,
        isAutenticated: !isEmpty(action.user),
        user: action.user
      }
    default: return state
  }
}