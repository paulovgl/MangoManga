import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import GeneroRegister from "../../../pages/generos/register"
import GeneroEdit from "../../../pages/generos/edit"
import GeneroListagem from "../../../pages/generos/listagem"


const prefix = '/genero'

const routers = [

  {
    patch: `${prefix}/show`,
    type: 'private',
    component: GeneroListagem,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/:id/edit`,
    type: 'private',
    component: GeneroEdit,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/create`,
    type: 'private',
    component: GeneroRegister,
    roles: ['administrador', 'editor']
  },
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents