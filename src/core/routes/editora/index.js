import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'
import EditoraRegister from "../../../pages/editora/register"
import EditoraEdit from "../../../pages/editora/edit"
import EditoraListagem from "../../../pages/editora/listagem"


const prefix = '/editora'

const routers = [

  {
    patch: `${prefix}/show`,
    type: 'private',
    component: EditoraListagem,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/:id/edit`,
    type: 'private',
    component: EditoraEdit,
    roles: ['administrador', 'editor']
  },
  {
    patch: `${prefix}/create`,
    type: 'private',
    component: EditoraRegister,
    roles: ['administrador', 'editor']
  },
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents