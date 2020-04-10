import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import SearchPage from '../../../pages/search'

const prefix = '/search'

const routers = [

  {
    patch: `${prefix}`,
    type: 'private',
    component: SearchPage,
    roles: ['administrador', 'editor', 'user']
  },
  {
    patch: `${prefix}/:type/:name`,
    type: 'private',
    component: SearchPage,
    roles: ['administrador', 'editor']
  }  
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents