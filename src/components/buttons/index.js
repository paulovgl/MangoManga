import React, { Component } from 'react';
import {MDBBtn} from 'mdbreact'

class MMButton extends Component{
  render(){
    return (
      <MDBBtn onClick={()=> {this.props.onClick()}} color={this.props.color ? this.props.color : 'red darken-2'}>      
          {this.props.title}      
      </MDBBtn>
    )
  }
}

export {MMButton}