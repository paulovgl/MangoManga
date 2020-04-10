import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import Login from "../../pages/login/";
import GeneroRoutes from './genero';
import AutorRoutes from './autor';
import ScanRoutes from './scan';
import CapitulosRoutes from './capitulos';
import MangaRoutes from './manga';
import ProfileRoutes from './profile';
import EditoraRoutes from './editora';
import SearchRoutes from './search'
import HomeRoutes from './panel'

import Adm from "../../pages/administrador/register"

import NotFound from '../../pages/404'
import Index from '../../pages/index'


const Routes  = () => {

  return (
<BrowserRouter >

    <Switch>
      <Route path='/login' exact component={Index} />       
      {/* <Route path='/login' exact component = {Login}  />   */}
      {/* <Route path='/' exact component={Home} /> */}
      <Route path='/admin/create' exact component={Adm} />      
       {/* Rota */}
       {HomeRoutes}
       {GeneroRoutes}
       {AutorRoutes}
       {ScanRoutes}
       {CapitulosRoutes}
       {MangaRoutes}
       {ProfileRoutes}
       {EditoraRoutes}
       {SearchRoutes}
       {/* Router Erro */}
       <Route component = {NotFound} />


    </Switch>

</BrowserRouter>
  )


}

export default Routes;