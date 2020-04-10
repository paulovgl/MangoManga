import React from 'react'
import requireAuth from '../../utils/requireAuth'
import {PrivateRoute} from '../privateRoutes'

import Manga from "../../../pages/manga/"
import MangaListagem from "../../../pages/manga/listagem"
import MangaRegister from "../../../pages/manga/register"


const prefix = '/manga'

const routers = [

  {
    patch: `${prefix}/show`,
    type: 'private',
    component: MangaListagem,
    roles: ['administrador', 'editor', 'user']
  },
  {
    patch: `${prefix}/:id/show`,
    type: 'private',
    component: Manga,
    roles: ['administrador', 'editor', 'user']
  },
  {
    patch: `${prefix}/create`,
    type: 'private',
    component: MangaRegister,
    roles: ['administrador', 'editor']
  },
]


const routeComponents = routers.map(({patch, component, roles}, key) => <PrivateRoute exact path={patch} component={requireAuth(component, roles)} key={key} />
 );

export default routeComponents