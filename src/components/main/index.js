import React, { Component, Fragment } from 'react'
import Sidnav from '../sidnav/';
import Header from '../header/';
import {MDBContainer} from 'mdbreact'

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
        <MainPrincipal expanded={this.state.expanded} >
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
             <div className={this.props.expanded === false ? "closed" : "opened"}> 
              {this.props.children} {/* Imprime tudo que vem das outras views */} 
              </div>              
          </Fragment>
      )
  }
}

export {MainPrincipal, Main}