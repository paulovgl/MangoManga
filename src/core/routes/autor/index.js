import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import AuthorRegister from "../../../pages/author/register"
import AuthorEdit from "../../../pages/author/edit"
import AuthorListagem from "../../../pages/author/listagem"


const prefix = '/author'

const routers = [

  {
    patch: `${prefix}/show`,
    type: 'private',
    component: AuthorListagem,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/:id/edit`,
    type: 'private',
    component: AuthorEdit,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/create`,
    type: 'private',
    component: AuthorRegister,
    roles: ['administrador', 'editor']
  },
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents