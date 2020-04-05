import React from 'react';

export const themes = {

  light: {
    body: {
      background: 'rgba(255, 255, 255,0)',
    },
    input:{
      label: {
        color: '#d32f2f',        
      },
      text: {
        border: '#f57600',
        background: 'rgba(255,255,255, 0.5)',
        color: 'rgb(62, 69, 81)',
        placeholder: {
          color: 'rgba(62, 69, 81,0.7)'
        },    
        focus:{
          outline:'none',
          boxShadow: '0px 0px 4px  #f57600'          
        }
      },
      select: {
        border: '#f57600',
        background: '#fff',
        color: 'rgb(62, 69, 81)',
        placeholder: { 
          color: 'rgba(62, 69, 81,0.7)'
        } 
      },
      textarea:{
        border: '#f57600',
        color: 'rgb(62, 69, 81)',
        background: '#fff',
        placeholder: {
          color: 'rgba(62, 69, 81,0.7)'
        }        
      }
    },
    cards: {
      default:{
        header: {
          background: 'deep-orange darken-2',
          color: 'white-text'
        },
        body:{
          background: '#fff',
          color: 'rgba(62, 69, 81)',
        },        
      },
      cardManga:{
        section:{
          title:{
            color: 'rgba(62, 69, 81, 1)'
          }
        }
      }
            
    }
  },
  dark: {
    body: {
      background: 'rgba(62, 69, 81,0.8)' 
    },
    input:{
      label: {
        color: '#f57600',        
      },
      text: {
        border: '#4a5879',
        background: '#4B515D',
        color: '#fff',
        placeholder: {
          color: 'rgba(255,255,255,0.7)'
        }
      },
      select: {
        border: '#4a5879',
        background: '#fff',
        color: '#4B515D',
        placeholder: {
          color: 'rgba(62, 69, 81,0.7)'
        } 
      },
      textarea:{
        border: '#4a5879',
        background: '#4B515D',
        color: '#fff',
        placeholder: {
          color: 'rgba(255,255,255,0.7)'
        }       
      }
    },
    cards: {
      default:{
        header: {
          background: 'deep-orange darken-2',
          color: 'white-text'
        },
        body:{
          color: '#fff',
          background: '#3e4551',
        },  
      },
      cardManga:{
        section:{
            title:{
              color: 'rgba(255,255,255,1)',
          }
        }
      }      
    }
  }
}

export const MMTheme = React.createContext(
  themes.light
)
