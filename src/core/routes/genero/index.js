import React from 'react'


import GeneroRegister from "../../pages/generos/register"
import GeneroEdit from "../../pages/generos/edit"
import GeneroListagem from "../../pages/generos/listagem"


const prefix = '/genero'

const router = [

  {
    patch: `${prefix}/show`,
    type: 'private',
    component: GeneroListagem,
    roles: ['administrador']
  },
  {
    patch: `${prefix}/:id/edit`,
    type: 'private',
    component: GeneroEdit,
    roles: ['administrador']
  },
  {
    patch: `${prefix}/create`,
    type: 'private',
    component: GeneroRegister,
    roles: ['administrador']
  },
]


// const routerComponents = router.map((x,y )=> )