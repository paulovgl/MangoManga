import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import ScansRegister from "../../../pages/scans/register"
import ScansEdit from "../../../pages/scans/edit"
import ScansListagem from "../../../pages/scans/listagem"


const prefix = '/scans'

const routers = [

  {
    patch: `${prefix}/show`,
    type: 'private',
    component: ScansListagem,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/:id/edit`,
    type: 'private',
    component: ScansEdit,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/create`,
    type: 'private',
    component: ScansRegister,
    roles: ['administrador', 'editor']
  },
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents