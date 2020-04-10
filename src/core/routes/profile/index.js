import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import ProfileEdit from "../../../pages/profile/edit"
import ProfileListagem from "../../../pages/profile/index"


const prefix = '/profile'

const routers = [

  {
    patch: `${prefix}`,
    type: 'private',
    component: ProfileListagem,
    roles: ['administrador', 'editor', "usuario"]
  },
  {
    patch: `${prefix}/edit`,
    type: 'private',
    component: ProfileEdit,
    roles: ['administrador', 'editor', "usuario"]
  },
  
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents