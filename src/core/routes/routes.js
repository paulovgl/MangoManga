import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../../pages/login/";
import Home from "../../pages/home/"
import Registro from "../../pages/registro/"
import Manga from "../../pages/manga/"
import MangaRegister from "../../pages/manga/register"
import ScanRegister from "../../pages/scans/register"
import EditoraRegister from "../../pages/editora/register"


const Routes  = () => {

  return (
<BrowserRouter >
    <Switch>
      <Route path='/login' exact component = {Login}  />  
      <Route path='/' exact component={Home} />
      <Route path='/registro' exact component={Registro} />
      {/* Rotas Manga */}
      <Route path='/manga/:id/show' exact component={Manga} />
      <Route path='/manga/create' exact component={MangaRegister} />
      {/* Rotas Scans */}
      <Route path='/scans/create' exact component={ScanRegister} />
      {/* Rotas Scans */}
      <Route path='/editora/create' exact component={EditoraRegister} />

    </Switch>
</BrowserRouter>
  )


}

export default Routes;