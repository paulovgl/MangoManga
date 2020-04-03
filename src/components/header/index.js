import React, {Component} from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBIcon,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBDataTable, MDBSideNavCat
  } from "mdbreact"; 

  import { Link, withRouter} from 'react-router-dom';
  import './header.scss' 
  import MMSearch from '../../components/pesquisa'
  class Header extends Component {

    constructor(props){
      super(props)
      this.state = {
        username: '',
        isOpen: false,
        avatar: null,     
      };
    }
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  clickTogle = () => {
    this.props.parentCallback(this.props.expanded === false ? true : false);
    // localStorage.setItem('options', JSON.stringify({sidnavExpanded: !this.props.expanded}))
            
  }
  
  render(){
  return (   
      // <withRouter>
      <MDBNavbar color='red darken-2' dark expand='md' className={this.props.expanded === false ? "closed" : "opened"} >
          <MDBNavbarBrand>
            
          </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
            <MDBNavItem>    
              <MDBBtn onClick={this.clickTogle} color='transparent' style={{padding:'0', color: "#fff"}} >
                <MDBIcon size='2x' icon='bars'/>
              </MDBBtn>   
                <span className='pl-3' style={{color:"#fff", fontWeight:"bold"}}>MangoManga</span>
            </MDBNavItem>           
          </MDBNavbarNav>           


            {/* <MDBNavbarNav className='mx-auto'>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>              
            </MDBNavbarNav> */}

          <MDBNavbarNav right>
            
          <MDBNavItem>         
           <a class="nav-link waves-effect waves-light" onClick={()=> this.props.history.push('/search')}>
           <i class="fas fa-search"></i>
           </a>     
          </MDBNavItem>          
         
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem onClick={()=> {this.props.history.push('/profile/edit')}}>Editar Usuário</MDBDropdownItem>
                  <MDBDropdownItem onClick={()=> {this.props.history.push('/login')}}>Sair</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBNavbar> 
      // </withRouter>  
    );
  
  }
}

export default withRouter(Header)