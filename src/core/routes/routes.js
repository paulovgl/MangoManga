import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import Login from "../../pages/login/";
import Home from "../../pages/home/"
// import Registro from "../../pages/registro/"
import Manga from "../../pages/manga/"
import MangaRegister from "../../pages/manga/register"
import RegisterCapitulo from '../../pages/capitulos/register'

import ScanRegister from "../../pages/scans/register"
import ScanEdit from "../../pages/scans/edit"

import EditoraRegister from "../../pages/editora/register"
import EditoraEdit from "../../pages/editora/edit"

import GeneroRegister from "../../pages/generos/register"
import GeneroEdit from "../../pages/generos/edit"

import AuthorRegister from "../../pages/author/register"
import AuthorEdit from "../../pages/author/edit"

import ProfileUpdate from '../../pages/profile/edit'
import Profile from '../../pages/profile/'

import SearchPage from '../../pages/search'
import NotFound from '../../pages/404'
import Index from '../../pages/index'


const Routes  = () => {

  return (
<BrowserRouter >

    <Switch>

      {/* <Route path='/login' exact component = {Login}  />   */}
      <Route path='/' exact component={Home} />
      
      {/* <Route path='/registro' exact component={Registro} /> */}
      <Route path='/profile/edit' exact component={ProfileUpdate} />
      <Route path='/profile' exact component={Profile} />
      {/* Rotas Manga */}
      <Route path='/manga/:id/show' exact component={Manga} />
      <Route path='/manga/create' exact component={MangaRegister} />
      {/* Rotas Scans */}
      <Route path='/scans/create' exact component={ScanRegister} />
      <Route path='/scans/:id/edit' exact component={ScanEdit} />
      {/* Rotas Editora */}
      <Route path='/editora/create' exact component={EditoraRegister} />
      <Route path='/editora/:id/edit' exact component={EditoraEdit} />
      {/* Rotas Gênero */}
      <Route path='/genero/create' exact component={GeneroRegister} />
      <Route path='/genero/:id/edit' exact component={GeneroEdit} />
      {/* Rotas Autor */}
      <Route path='/author/create' exact component={AuthorRegister} />
      <Route path='/author/:id/edit' exact component={AuthorEdit} />
      {/* Search Search */}
      <Route path='/search' exact component={SearchPage} />
      <Route path='/search/:type/:name' exact component={SearchPage} />
      <Route path='/login' exact component={Index} />     
      {/* Rotas Capítulos */}
      <Route path='/capitulos/create' exact component={RegisterCapitulo} />
       {/* Rota Error */}
       <Route component = {NotFound} />


    </Switch>

</BrowserRouter>
  )


}

export default Routes;