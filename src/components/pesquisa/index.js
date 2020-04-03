import React, { Component } from "react";
import { MDBInput, MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import {StyleSheet, css} from 'aphrodite'
import {withRouter} from 'react-router'


const styles = StyleSheet.create({   
  inputIcon: {
    color: '#d32f2f'
  },
  inputSearch:{
    borderBottom: '1px solid #d32f2f',
    color: '#d32f2f',
    '::placeholder':{
      color: '#d32f2f',
    },
    ':focus':{
      borderBottom: '1px solid #d32f2f',
      boxShadow: '0 1px 0 0 #d32f2f',      
    }
  }
})

class MMSearch extends Component {

  // state = {
  //    item: null
  // }

  // listinput = event => {   
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  // })
// }   
  
  render() {    
    return (
      // <MDBCol md="3">
       <MDBFormInline className={`md-form mt-0 mb-0 justify-content-center`}>
        <MDBIcon style={{cursor: 'pointer'}} icon="search" className={css(styles.inputIcon)}/>       
        <input  onChange={this.props.onChange} className={`form-control w-75 form-control-sm ml-3 mb-0 ${css(styles.inputSearch)}`} type="search" placeholder="Search" aria-label="Search" />      
      </MDBFormInline>
      // </MDBCol>
    );
  }
  
}

export default withRouter(MMSearch)
