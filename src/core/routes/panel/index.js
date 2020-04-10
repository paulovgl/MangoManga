import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import Home from "../../../pages/home/"


const prefix = '/'

const routers = [
  {
    patch: `${prefix}`,
    type: 'private',
    component: Home,
    roles: ['administrador', 'editor', 'user']
  } 
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents