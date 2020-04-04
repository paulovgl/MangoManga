import React, { Component, Fragment } from 'react'
import Sidnav from '../sidnav/';
import Header from '../header/';
import {MDBContainer} from 'mdbreact'
import {StyleSheet, css} from 'aphrodite'
import {MMTheme, themes} from '../theme' 

// images
import bg1 from '../../images/bg2.jpg'
import bg2 from '../../images/bg1.png'


const images = () => {
  let items = [
    bg1, 
    bg2
  ]  
   let item = items[Math.floor(Math.random() * items.length)];
   return item;
}


const styles = (theme) =>StyleSheet.create({
  mask:{   
    position: 'relative',
    overflow: 'hidden', 
    ':before':{
      position: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      background: theme.body.background,
      top: 0,
      zIndex: -1,
      bottom: 0,
      left: 0,
      right: 0,
      height:'100%',
      width:'100%',
      content: " ' ' "
    }
  },
  bg:{ 
    position: 'relative',     
    overflow: 'hidden', 
    ':before': {
      opacity: 0.1, 
      content: "' '",
      zIndex: -1,
      position: 'fixed',
      backgroundImage: `url(${images()})` ,     
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height:'100%',
      width:'100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  }
})

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      sidnavExpanded: false,     
    };
  }

  componentWillMount(){    
    let options =  localStorage.getItem('options');
    if(options === null){
      localStorage.setItem('options', JSON.stringify(({darkMode: false, sidnavExpanded: false})))
      this.setState({darkMode: false, sidnavExpanded: false})
    }
    else{
      // barra
      options = JSON.parse(options);
      if(options.hasOwnProperty('sidnavExpanded')){  
        this.setState({sidnavExpanded: options.sidnavExpanded})
      }
      else{         
        options.sidnavExpanded = false
        localStorage.setItem('options', JSON.stringify(options));
        this.setState({sidnavExpanded: false}); 
      }

      if(options.hasOwnProperty('darkMode')){
        this.setState({darkMode: options.darkMode})
      }
      else{
        options.darkMode = false
        localStorage.setItem('options', JSON.stringify(options));
        this.setState({darkMode: false}); 
      }
      // thema
    }
  }


  handleSwitchChange = () => {
    // change theme
    let options =  localStorage.getItem('options');
    options = JSON.parse(options);
    let theme = !options.darkMode 
    options.darkMode = theme
    localStorage.setItem('options', JSON.stringify(options))
    this.setState({darkMode: theme})
  }


  callbackFunction = (childData) => {
    this.setState({sidnavExpanded: childData})
  }

  render() {   
    document.title = 'MangoMangá'
    return(
      <Fragment>
        <MMTheme.Provider value={this.state.darkMode === true ? themes.dark : themes.light} >
        <Sidnav expanded={this.state.sidnavExpanded}  />
        <Header  changeTheme={this.handleSwitchChange} stateThema={this.state.darkMode} parentCallback={this.callbackFunction} expanded={this.state.sidnavExpanded} />
        <MainPrincipal  expanded={this.state.sidnavExpanded} >
          <MDBContainer className='mt-5'>
          {this.props.children}
          </MDBContainer>
        </MainPrincipal>
        </MMTheme.Provider>
      </Fragment>
    )
  }
}

class MainPrincipal extends Component { 
  static contextType = MMTheme

  render() {
     let theme = this.context
      return (
          <Fragment> 
             <div className={`${this.props.expanded === false ? "closed" : "opened"} ${css(styles(theme).bg)}`}> 
              <div className={css(styles(theme).mask)}>
              {this.props.children} {/* Imprime tudo que vem das outras views */} 
              </div>    
              </div>          
          </Fragment>
      )
  }
}

export {MainPrincipal, Main}