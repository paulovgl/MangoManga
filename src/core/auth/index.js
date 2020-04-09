import Token from '../token'

const AuthService = {
  login: (token) => {
    Token.setToken(token)
  },
  logout:() => {
    Token.removeToken()
  }
}

export default AuthService