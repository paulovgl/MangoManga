import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../../pages/login/";
import Home from "../../pages/home/"
import Registro from "../../pages/registro/"
import Manga from "../../pages/manga/"
import MangaRegister from "../../pages/manga/register"
import ScanRegister from "../../pages/scans/register"
import EditoraRegister from "../../pages/editora/register"
import GeneroRegister from "../../pages/generos/register"
import AuthorRegister from "../../pages/author/register"
import SearchPage from '../../pages/search'
import ProfileUpdate from '../../pages/profile/edit'
import Profile from '../../pages/profile/'


const Routes  = () => {

  return (
<BrowserRouter >

    <Switch>

      <Route path='/login' exact component = {Login}  />  
      <Route path='/' exact component={Home} />
      <Route path='/registro' exact component={Registro} />
      <Route path='/profile/edit' exact component={ProfileUpdate} />
      <Route path='/profile' exact component={Profile} />
      {/* Rotas Manga */}
      <Route path='/manga/:id/show' exact component={Manga} />
      <Route path='/manga/create' exact component={MangaRegister} />
      {/* Rotas Scans */}
      <Route path='/scans/create' exact component={ScanRegister} />
      {/* Rotas Editora */}
      <Route path='/editora/create' exact component={EditoraRegister} />
      {/* Rotas Gênero */}
      <Route path='/genero/create' exact component={GeneroRegister} />
      {/* Rotas Autor */}
      <Route path='/author/create' exact component={AuthorRegister} />
      {/* Search Search */}
      <Route path='/search' exact component={SearchPage} />
      <Route path='/search/:type/:name' exact component={SearchPage} />


    </Switch>

</BrowserRouter>
  )


}

export default Routes;