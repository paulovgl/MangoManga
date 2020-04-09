
import React, {Component} from 'react'
// Modal
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {StyleSheet, css} from 'aphrodite';
import {MMButton, MMBtnLoginWith} from '../buttons/'
import {withRouter} from 'react-router'
import { connect } from 'react-redux';
import {login} from '../../core/redux/actions/authActions'
import PropTypes from 'prop-types';
import PopUp from '../notifications/index'

const styles = StyleSheet.create({
  btn:{
    borderRadius: 10,
    fontWeight: 700,    
    paddingLeft: 10,
    paddingRight: 10
  },
  modalTitle:{
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d32f2f'
  },
  label: {
    color: '#d32f2f',
    fontWeight: 700,
  },
  input:{
    borderColor: '#f57600',    
    ':focus':{
      outline:'none',
      boxShadow: '0px 0px 4px  #f57600 '
      // border:'1px solid red'
    }

  }
})



class ModalLogin extends Component {


  state = {
    email: '',
    password: ''
  }

  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })      
  }

  submitForm(){
    this.props.login(this.state).then(res => {
      console.log(res)
      if(res.status === 'success'){

        this.props.history.push('/')
        }
      else if( res.status === 'error'  ){      
        res.content.map((x,y)=> {
           PopUp.showMessage('error', x.message )
      })
      }
    })
    // 
  }


  render() {
    return (
      <>
      <a  onClick={this.props.toggle} className={`${css(styles.btn)} nav-link waves-effect waves-light btn btn-sm mt-0 mb-0 red darken-2`} >
                    {this.props.title}
      </a>  
      <MDBContainer>       
             
        <MDBModal isOpen={this.props.status} toggle={this.toggle}>
          <MDBModalHeader className={css(styles.modalTitle)} toggle={this.props.toggle}>Login</MDBModalHeader>
          <MDBModalBody className='justify-content-center'>
           <center>  
            <MMBtnLoginWith social='facebook' title='Login com Facebook' />
            <MMBtnLoginWith social='twitter' title='Login com Twitter' />
            </center>
            <form className='mt-3'>                 
                  <label htmlFor="defaultFormLoginEmailEx" className={`${css(styles.label)}`}>
                    Email:
                  </label>
                  <input onChange={this.listinput} type="email" name='email' id="defaultFormLoginEmailEx" className={`form-control ${css(styles.input)}`} />
                  <br />
                  <label htmlFor="defaultFormLoginPasswordEx" className={`${css(styles.label)}`}>
                    Senha:
                  </label>
                  <input  onChange={this.listinput} name='password' type="password" id="defaultFormLoginPasswordEx" className={`form-control ${css(styles.input)}`} />
                  <center className='mt-3'>
                     <MMButton title='Login' onClick={()=> this.submitForm() } />    
                  </center>  
                </form>
          </MDBModalBody >   
        </MDBModal>
      </MDBContainer>
      </>
      );
    }
  }

  ModalLogin.propTypes = {
    login: PropTypes.func.isRequired
  }

  // ModalLogin = 
  export default connect(null, {login})(withRouter(ModalLogin));