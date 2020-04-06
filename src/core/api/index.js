import axios from 'axios';
import {endpoint} from '../endpoints';

const ApiService = {

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



}
export default ApiService;