import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import App from './App';
import Routes from './core/routes/routes'
import thunk from 'redux-thunk'
import setAuthorizationToken from './core/utils/setAuthorizationToken';
import rootReducer from './core/redux/reduces/rootReducer';
import { Provider } from 'react-redux';
import { setCurrentUser, setRolesUser } from './core/redux/actions/authActions';
import * as serviceWorker from './serviceWorker';
import Api from './core/api';
import {MMSpinner} from './components/loading'; 
import { createStore, compose, applyMiddleware } from 'redux'
import hoistNonReactStatics from 'hoist-non-react-statics';
import Token from './core/token/index'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

class App extends Component {

  state = {loading: false}


componentWillMount(){    
  this.data();
  setTimeout(() => {
    this.setState({loading: true});
  }, 1000)
}

async data(){
  if (Token.getToken()) {   
    setAuthorizationToken(Token.getToken());
    await Api.getDetailsLoggedUser().then(
      async (response) => {   
        // console.log(response)
        let usuario = await response.data.data
        console.log(usuario)
        usuario = {
          email: usuario.email,
          username: usuario.username,
          avatar: usuario.avatar
        }
        console.log(usuario)
        store.dispatch(setCurrentUser(usuario))   
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
              console.log(roles)
              store.dispatch(setRolesUser(roles))       
      }   
    )         
  };
}

getLoading(){
  if(this.state.loading){
    return <Routes />
  }
  else{
    return(
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <MMSpinner />
    </div>)
  }
}

render(){
  return (<Provider store = {store}>{this.getLoading()} </Provider>)
}

}





  ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
