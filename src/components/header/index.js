import React, {Component} from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn,
  } from "mdbreact"; 

  import {withRouter} from 'react-router-dom';
  import './header.scss' 
  import {MMSwitchTheme} from '../../components/switch';
  import { connect } from 'react-redux';
  import {logout} from '../../core/redux/actions/authActions'
  import PropTypes from 'prop-types';


  class Header extends Component {

    constructor(props){
      super(props)
      this.state = {
        username: '',
        isOpen: false,
        avatar: null,     
      };
    }


  logout(e){
    e.preventDefault();
    this.props.logout();
    this.props.push('/')
  }  

  setUsername = (user) => {
    if(user.username === null || user.username === undefined){
      return ''
    }
    else{
      return  user.username
    }
  }

  setAvatar = (user) => {
    if(user.avatar === null){
      return <MDBIcon icon="user" className="mr-1" />
    }
    else{
      return (
        <img src={`data:image/png;base64,${user.avatar}`} className="rounded-circle z-depth-0" style={{
          height: "28px", padding: 0
        }} alt="" />
      )
    }
  }
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  clickTogle = () => {
    this.props.parentCallback(this.props.expanded === false ? true : false);
    let options = localStorage.getItem('options');
    options = JSON.parse(options);
    options.sidnavExpanded = !this.props.expanded
    localStorage.setItem('options', JSON.stringify(options))
            
  }
  
  render(){
    const {isAuthenticated, user} = this.props.auth
  return (   
      // <withRouter>
      <MDBNavbar color='red darken-2' dark expand='md' className={this.props.expanded === false ? "closed" : "opened"} >
          <MDBNavbarBrand>
            
          </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
            <MDBNavItem>    
              <MDBBtn onClick={()=> this.clickTogle()} color='transparent' style={{padding:'0', color: "#fff"}} >
                <MDBIcon size='2x' icon='bars'/>
              </MDBBtn>   
                <span className='pl-3' style={{fontSize: 22, color:"#fff", fontWeight:"bold",  fontFamily: 'Comic Neue'}}>MangoManga</span>
            </MDBNavItem>           
          </MDBNavbarNav> 

          <MDBNavbarNav right>
            
          <MDBNavItem>         
           <a className="nav-link waves-effect waves-light" onClick={()=> this.props.history.push('/search')}>
           <i className="fas fa-search"></i>
           </a>     
          </MDBNavItem> 

          <MDBNavItem>
            <MMSwitchTheme onChange={this.props.changeTheme} status={this.props.stateThema}  />
          </MDBNavItem>         
         
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    {this.setAvatar(user)}
                    <span style={{fontSize: 15, marginLeft: 4, fontWeight: 500}}>{this.setUsername(user)}</span> 
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

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  roles: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    roles: state.roles
  }
}

export default connect(mapStateToProps,{logout})(withRouter(Header)) 