const TOKEN_KEY = "@mango-auth"

const Token = {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken:(token)=> {
    return localStorage.setItem(TOKEN_KEY, token)
  },
  hasToken: () =>{
    return Token.getToken();
  },
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY)
  },
  sendToken: () => {
    return {
      'Authorization' : `Bearer ${Token.getToken()}`,
      'content-type': 'application/json'
    }
  }
}

export default Token;