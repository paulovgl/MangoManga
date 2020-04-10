import React from 'react';
import AuthService  from '../auth' 
import {Route, Redirect} from 'react-router-dom'


export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
   <Route 
     {...rest} 
     render={ props =>
      AuthService.isAutenticated() ? ( <Component {...props} />) : (
     <Redirect to={{ pathname: "/login", state: { from: props.location } }} />   
     )
   }
   />
   )
 }
