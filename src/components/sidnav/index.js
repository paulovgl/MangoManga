import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter } from 'react-router';
import {MDBIcon } from 'mdbreact';
import logo from '../../images/logo.png'


class Sidnav extends Component {

  state = {
    selected: 'home',
    expanded: false
  };

  onSelect = (selected) => {
    this.setState({ selected: selected });       
    const to = '/' + selected;
    this.props.history.push(to);
};  

  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };

  render() {
    return (
      <SideNav style={{ background: '#212121', position: 'fixed' }}
      onSelect={this.onSelect}
      expanded={this.props.expanded}
      onToggle={this.onToggle}
  >
      <SideNav.Nav defaultSelected="home">
          {/* Aqui entra a logo */}
          {this.props.expanded ? (
              <NavItem eventKey="" className='text-center' style={{ marginBottom: '25%' }}>
                  <img src={logo} style={{ paddingTop: 25 }} width='40em' height='auto' alt='logomarca' />
              </NavItem>
          ) : (
                  <NavItem eventKey="" style={{ marginBottom: '25%', marginTop: '15%' }}>
                      <NavIcon>
                          <img src={logo} width='30em' alt='logomarca' />
                      </NavIcon>
                  </NavItem>
              )}  

                    <NavItem eventKey=''>
                        <NavIcon>
                            <MDBIcon style={{color: '#fff'}} icon='home' size='2x' />
                        </NavIcon>
                        <NavText style={{color: '#fff'}} >
                              Início
                        </NavText>
                    </NavItem>
              
              </SideNav.Nav>
              </SideNav>
          )
      }
  
  }

  export default withRouter(Sidnav)

