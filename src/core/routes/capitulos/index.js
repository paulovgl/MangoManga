import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import CapitulosRegister from "../../../pages/capitulos/register"


const prefix = '/capitulos'

const routers = [

  {
    patch: `${prefix}/create`,
    type: 'private',
    component: CapitulosRegister,
    roles: ['administrador', 'editor']
  },
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents