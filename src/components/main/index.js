import React, { Component, Fragment } from 'react'
import Sidnav from '../sidnav/';
import Header from '../header/';
import {MDBContainer} from 'mdbreact'
import {StyleSheet, css} from 'aphrodite'
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


const styles =StyleSheet.create({
  bg:{ 
    position: 'relative',  
    overflow: 'hidden', 
    ':before': {
      opacity: 0.1, 
      content: "' '",
      zIndex: -1,
      position: 'absolute',
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
      expanded: false,     
    };
  }

  callbackFunction = (childData) => {
    this.setState({expanded: childData})
  }

  render() {   
    document.title = 'MangoMangá'
    return(
      <Fragment>
        <Sidnav expanded={this.state.expanded} />
        <Header parentCallback={this.callbackFunction} expanded={this.state.expanded} />
        <MainPrincipal  expanded={this.state.expanded} >
          <MDBContainer className='mt-5'>
          {this.props.children}
          </MDBContainer>
        </MainPrincipal>
      </Fragment>
    )
  }
}

class MainPrincipal extends Component { 

  render() {
      return (
          <Fragment> 
             <div className={`${this.props.expanded === false ? "closed" : "opened"} ${css(styles.bg)}`}> 
              {this.props.children} {/* Imprime tudo que vem das outras views */} 
              </div>              
          </Fragment>
      )
  }
}

export {MainPrincipal, Main}