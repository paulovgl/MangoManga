import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem
} from "mdbreact";
import {StyleSheet, css} from 'aphrodite';
import Logo from '../../images/logo.png'
import ModalLogin from '../modals/modalLogin'
import ModalRegister from '../modals/modalRegister'

const styles = StyleSheet.create({
  btn:{
    borderRadius: 10,
    fontWeight: 700,    
    paddingLeft: 10,
    paddingRight: 10
  },
  title:{
    fontFamily: 'Comic Neue',
  }
})

class NavbarPage extends Component {

  state = {
    isOpen: false,
    loginModal: false,
    registerModal: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggle = () => {   
    this.setState({
      loginModal: !this.state.loginModal
    });
  }
  toggleRegister = () => {   
    this.setState({
      registerModal: !this.state.registerModal
    });
  }


  render() {
    return (

      <MDBNavbar color="elegant-color" fixed='top' dark expand="md">

        <MDBNavbarBrand>
          <img src={Logo} height="35" alt="" />
          <strong className={`${css(styles.title)} white-text`}>MangoManga</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem >
                <ModalLogin title='Login' id='2' toggle={this.toggle} status={this.state.loginModal} />
            </MDBNavItem>  
            <MDBNavItem >
                <ModalRegister title='SignUp' id='2' toggle={this.toggleRegister} status={this.state.registerModal} />
            </MDBNavItem>         

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}





export default NavbarPage;