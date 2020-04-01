import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../../pages/login/";
import Home from "../../pages/home/"
import Registro from "../../pages/registro/"
import Manga from "../../pages/manga/"


const Routes  = () => {

  return (
<BrowserRouter >
    <Switch>
      <Route path='/login' exact component = {Login}  />  
      <Route path='/' exact component={Home} />
      <Route path='/registro' exact component={Registro} />
      <Route path='/manga/:id' exact component={Manga} />
    </Switch>
</BrowserRouter>
  )


}

export default Routes;