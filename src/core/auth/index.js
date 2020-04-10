import Token from '../token'
import Api from '../../core/api/'

const AuthService = {
  login: (token) => {
    Token.setToken(token)
  },
  logout:() => {
    Token.removeToken()
  },
  isAutenticated : () => {   
    // verificar se existe algum token
    let token = Token.hasToken() 
     if(token === null || token === undefined || token === '') return false
     else{
  
       let isValid = Api.isValidToken().then(res => {      
         if (res.data === 200) {
        //  if (res.statusText === 'OK') {
           return true
         }
         else {
          Token.removeToken();
           return false
         }
       }
       )
       return Promise.resolve(isValid)
    } 
  }
}

export default AuthService