import axios from 'axios';
import {endpoint} from '../endpoints';
import Token from '../token'

const ApiService = {


  // Validando Auth

  isValidToken: () => {
    return axios.get(`${endpoint}/auth/isvalid`, { headers: Token.sendToken() }).catch(error => {
      return 'ERROR'
    })
  },

  // Editora

  createEditora: async (dados) => {    
    return await axios.post(`${endpoint}/editora/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },
  getEditEditora: async (id) => {
    return await axios.get(`${endpoint}/editora/${id}/edit`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  getShowEditora: async (id) => {
    return await axios.get(`${endpoint}/editora/show`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  updateEditora: async (id, dados) => {    
    return await axios.put(`${endpoint}/editora/${id}/update`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  // Genero

  createGenero: async (dados) => {    
    return await axios.post(`${endpoint}/genero/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },
  getEditGenero: async (id) => {
    return await axios.get(`${endpoint}/genero/${id}/edit`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  getShowGenero: async () => {
    return await axios.get(`${endpoint}/genero/show`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  updateGenero: async (id, dados) => {    
    return await axios.put(`${endpoint}/genero/${id}/update`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  // Scan

  createScan: async (dados) => {    
    return await axios.post(`${endpoint}/scan/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getEditScan: async (id) => {
    return await axios.get(`${endpoint}/scan/${id}/edit`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  updateScan: async (id, dados) => {    
    return await axios.put(`${endpoint}/scan/${id}/update`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getShowScan: async () => {
    return await axios.get(`${endpoint}/scan/show`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  // Autor

  createAutor: async (dados) => {    
    return await axios.post(`${endpoint}/autor/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getEditAutor: async (id) => {
    return await axios.get(`${endpoint}/autor/${id}/edit`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  updateAutor: async (id, dados) => {    
    return await axios.put(`${endpoint}/autor/${id}/update`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getShowAutor: async () => {
    return await axios.get(`${endpoint}/autor/show`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  createManga: async (dados) => {    
    return await axios.post(`${endpoint}/manga/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getShowManga: async (id) => {
    return await axios.get(`${endpoint}/manga/${id}/show/`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  getShowAllManga: async (id) => {
    return await axios.get(`${endpoint}/manga/show`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  getShowMangaSearch: async () => {
    return await axios.get(`${endpoint}/manga/show/search`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  getShowMangaUser: async () => {
    return await axios.get(`${endpoint}/manga/user/add/show/`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  addManga: async(id) => {
    return await axios.post(`${endpoint}/manga/user/add/${id}/`)
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  addMangaRating: async (id , data) => {
    return await axios.post(`${endpoint}/manga/rating/${id}/`, data)
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  // Capítulos
  createCapitulo: async (dados) => {    
    return await axios.post(`${endpoint}/capitulo/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getShowCapituloManga: async (id) => {
    return await axios.get(`${endpoint}/capitulo/${id}/show/`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  readCap: async (idCap, idManga) => {    
    return await axios.post(`${endpoint}/capitulo/read/${idManga}/${idCap}`)
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data
        }
      }
    })
  },

  // Administrador
  createAdministrador: async (dados) => {    
    return await axios.post(`${endpoint}/user/admin/create`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  getDetailsLoggedUser: async () => {
    return await axios.get(`${endpoint}/auth/getDetails`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },
  
  getShowEditProfile: async () => {
    return await axios.get(`${endpoint}/profile/edit`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  updateProfile: async (dados) => {    
    return await axios.put(`${endpoint}/profile/update`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  // Get Posts

  getPosts: async (id) => {
    return await axios.get(`${endpoint}/posts/${id}`)
      .then( response => response.data )
      .catch(error => {
        if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
        }
        else{
          if(error.response.hasOwnProperty('data') && error.response.data.hasOwnProperty('content') ){
            return error.response.data
          }
        }
      })
  },

  createPost: async (id,dados) => {    
    return await axios.post(`${endpoint}/posts/${id}`, dados, {})
    .then(response =>{return response.data} )
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  createLike: async (id) => {    
    console.log(id)
    return await axios.post(`${endpoint}/posts/${id}/likes`, {})
    .then(response =>{return response.data})
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  createComment: async (id, data) => {    
    console.log(id)
    return await axios.post(`${endpoint}/posts/${id}/comments`, data, {})
    .then(response =>{return response.data})
    .catch(error => {
      if(!error.response){
          return {status: 'error', content: [{message: 'Você está sem conexão' }]}
      }
      else{
        console.log(error)
        const { response } = error;
        const { request, ...errorObject } = response; // take everything but 'request'
        if(errorObject.hasOwnProperty('data') && errorObject.data.hasOwnProperty('content')){
          return  errorObject.data          
        }
      }
    })
  },

  //Store Posts
  

}
export default ApiService;