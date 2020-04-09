import React from 'react';

export const themes = {

  light: {
    body: {
      background: 'rgba(255, 255, 255,0)',
    },
    datatables:{
      dark: false,
      thead: {
         background: 'orange darken-2',
         color: true
        },
      tbody: {
         background: 'white',
         color: false 
        }
    },
    spinner: {
      color: '#d32f2f',   
    },
    input:{
      label: {
        color: '#d32f2f',        
      },
      section: {
        color: '#d32f2f',
        hr: {
          color:'#f57600' 
        }
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
            
    },
    manga:{
     avatar: {       
      button:{
        color: '#fff',
        add:{
          background: 'rgb(230, 74, 25)',
          hover: {
            background: 'rgba(230, 74, 25, 0.6)'
          }
        },
        remove:{
          background: 'rgba(62, 69, 81, 1)',
          hover: {
            background: 'rgba(62, 69, 81, 0.6)'
          }
        },
      }       
     },

    description:{
      title:{
        color: '#3E4551'
      },
      author: {
        color: '#3E4551',
      },
      scans:{
        background: '#d32f2f',
        color: '#fff',
      },      
      genre:{
        color: '#fff',
        background: '#3E4551',
      },
      editora:{
        
      },
      status:{

      },
      description:{
        color: '#3E4551'
      },
      },
      
      chapter:{
        number:{
          color: '#3E4551',
        },
        title: {
          color: '#d32f2f'
        },
        date: {
          color: '#fff',
          background: '#d32f2f'
        },
        new: {
          background: 'rgb(230, 74, 25)',
          color: '#fff'
        }
      }

    },
    buttons: {
      default: {
        color: '#fff',
        background: '#d32f2f'
      }
    }
  },
  dark: {
    body: {
      background: 'rgba(62, 69, 81,0.8)' 
    },
    datatables:{
      dark: true,
      thead: {
         background: 'unique-color-dark',
         color: true
        },
      tbody: {
         background: 'stylish-color-dark',
         color: true 
        }
    },
    spinner: {
      color: '#d32f2f',   
    },
    input:{
      label: {
        color: '#f57600',        
      },
      section: {
        color: '#d32f2f',
        hr: {
          color:'#f57600' 
        }
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
    },
    manga:{
      avatar: {       
       button:{
         color: '#fff',
         add:{
           background: 'rgb(230, 74, 25)',
           hover: {
             background: 'rgba(230, 74, 25, 0.6)'
           }
         },
         remove:{
           background: 'rgba(62, 69, 81, 1)',
           hover: {
             background: 'rgba(62, 69, 81, 0.6)'
           }
         },
       }       
      },
 
     description:{
       title:{
         color: '#fff'
       },
       author: {
         color: '#3E4551',
       },
       scans:{
         background: '#d32f2f',
         color: '#fff',
       },      
       genre:{
         color: '#fff',
         background: '#3E4551',
       },
       editora:{
         color: '#fff'
       },
       status:{
 
       },
       description:{
         color: '#fff'
       },
       },
       
       chapter:{
         number:{
           color: '#3E4551',
         },
         title: {
           color: '#d32f2f'
         },
         date: {
           color: '#fff',
           background: '#d32f2f'
         },
         new: {
           background: 'rgb(230, 74, 25)',
           color: '#fff'
         }
       } 
     },
     buttons: {
       default: {
         color: '#fff',
         background: '#d32f2f'
       }
     }
  }
}

export const MMTheme = React.createContext(
  themes.light
)
