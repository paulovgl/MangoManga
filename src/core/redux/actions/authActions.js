import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import {endpoint} from '../../endpoints'
import Token from '../../token'
import { SET_CURRENT_USER, SET_ROLES_USER } from './types';
import PopUp from '../../../components/notifications' 
import Api from '../../api/index'


export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function setRolesUser(roles){
  return {
    type: SET_ROLES_USER,
    roles
  }
}

export function logout(){
  return dispatch => {
    Token.removeToken()
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
    dispatch(setRolesUser({
      administrador: false,
      editor: false,
      user: false
    }))  }
}

export function login(user){
  return dispatch => {
    return axios.post(`${endpoint}/auth/login`, user,)
      .then(async (response)=> {
          if(response.headers["x-access-token"] !== undefined){
            Token.setToken(response.headers["x-access-token"])
            setAuthorizationToken(response.headers["x-access-token"])
            let roles = response.data.data.tipo_user            
              if(roles === '0'){
                roles = {
                  administrador: false,
                  user: true,
                  editor: false
                }
              }
              else if(roles === '1'){
                roles = {
                administrador: false,
                user: false,
                editor: true
                }
              }
              else if(roles === '2'){
                roles = {
                administrador: true,
                user: false,
                editor: false
                }
              }
              dispatch(setRolesUser(roles))   
              let usuario = response.data.data
              usuario = {
                email: usuario.email,
                username: usuario.username,
                avatar: usuario.avatar
              } 
              dispatch(setCurrentUser(usuario))    
              return response.data  
          }
      })
      .catch(async error => { 
        if(!error.response){
          return {status: 'error', content: [{message: 'Problemas na conexão'}] }          
        }
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return errorObject.data
          // errorObject.data.content.map((x,y)=> {
          //   PopUp.showMessage('error', x.message)
          // })          
        }

      })
  }
}