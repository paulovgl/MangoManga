import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter } from 'react-router';
import {MDBIcon } from 'mdbreact';
import logo from '../../images/logo.png'
import {connect} from 'react-redux'


class Sidnav extends Component {

  state = {
    selected: 'home',
    // expanded: false
  };

  onSelect = (selected) => {
    this.setState({ selected: selected });       
    const to = '/' + selected;
    this.props.history.push(to);
};  

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    }
   
  renderNav = () => {


    function displayinMenu(permissions, roles){
        if (permissions !== undefined && Array.isArray(permissions)) {              
            let keys = []                
            Object.entries(roles).map((e, f) => {
                let search = permissions.find((k) => k === e[0])
                if (search !== undefined) {
                    if (search === e[0]) {
                        keys.push(e[1])
                    }
                }
            })
            let hasPermission = keys.find((f => f === true))

            if (hasPermission === undefined) {
                return 'none'
            }
            return 'block'
        } 
    }      
      const nav = [

        {
            type: 'unique',
            title: 'Início',
            icon: { size: '2x', icon: 'home' },
            eventKey: '',
            permission: ['administrador', 'editor', 'user'],
        },
        {
            type: 'unique',
            title: 'Perfil',
            icon: { size: '2x', icon: 'user' },
            eventKey: 'profile',
            permission: ['administrador', 'editor', 'user'],

        },
        {
            type: 'unique',
            title: 'Buscar',
            icon: { size: '2x', icon: 'search' },
            eventKey: 'search',
            permission: ['administrador', 'editor', 'user'],

        },
        
        {
            type: 'multiple',
            title: 'Cadastro',
            eventKey: 'configure',
            icon: { size: '2x', icon: 'book-open' },
            permission: ['administrador', 'editor', 'user'],
            dropdown: [
                {
                    title: 'Manga',
                    eventKey: 'manga/show', 
                    permission: ['administrador', 'editor', 'user'],

                },
                {
                    title: 'Editora',
                    eventKey: 'editora/show', 
                    permission: ['administrador', 'editor'],

                },
                {
                    title: 'Autor',
                    eventKey: 'author/show', 
                    permission: ['administrador', 'editor'],

                },
                {
                    title: 'Gênero',
                    eventKey: 'genero/show',
                    permission: ['administrador', 'editor'],


                },
                {
                    title: 'Scan',
                    eventKey: 'scans/show', 
                    permission: ['administrador', 'editor'],


                },
                {
                    title: 'Capítulos',
                    eventKey: 'capitulos/create', 
                    permission: ['administrador', 'editor'],

                },
                
            ]
        },
        {
            type: 'multiple',
            title: 'Configuração',
            eventKey: 'configure',
            icon: { size: '2x', icon: 'cogs' },
            permission: ['administrador', 'editor'],
            dropdown: [
                {
                    title: 'Administrador',
                    eventKey: 'admin/create', 
                    permission: ['administrador'],

                },   
                {
                    title: 'Editor',
                    eventKey: 'editor/create',
                    permission: ['administrador'],

                },               
            ]
        }
      ]  
      
      
      return nav?.map((x,y)=> {
          if(x.type === 'unique'){
             return  (
                <NavItem style={{display: displayinMenu(x.permission, this.props.roles)}} key={y} eventKey={x.eventKey}>
                <NavIcon>
                    <MDBIcon style={{color: '#fff'}} icon={x.icon.icon} size={x.icon.size} />
                </NavIcon>
                <NavText style={{color: '#fff'}} >
                    {x.title}
                </NavText>
                </NavItem>
             )
          }
          else if (x.type === 'multiple'){
              return (
            <NavItem key={y}  navitemStyle={{display:displayinMenu(x.permission, this.props.roles)}} eventKey={x.eventKey}  >
            <NavIcon>
                <MDBIcon style={{color: '#fff'}} icon={x.icon.icon} size={x.icon.size} />
            </NavIcon>
            <NavText >
                {x.title}
            </NavText>
            {x.dropdown?.map((i, key) => {
                return (
                    <NavItem key={`${key}d${y}`}
                            //  navitemStyle={{}}
                             eventKey={i.eventKey} 
                            //  navitemClassName={css(styles(theme).navItem)}
                             navitemStyle={{display:displayinMenu(i.permission, this.props.roles)}}
                             >
                        <NavText>
                            {i.title}
                        </NavText>
                    </NavItem>
                )
            })}
           
        </NavItem>
              )
          }
      })
  }
  render() {
    // console.log(this.props.expanded)
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
                  <img src={logo} style={{ paddingTop: 25 }} width='55em' height='auto' alt='logomarca' />
              </NavItem>
          ) : (
                  <NavItem eventKey="" style={{ marginBottom: '25%', marginTop: '15%' }}>
                      <NavIcon>
                          <img src={logo} width='30em' alt='logomarca' />
                      </NavIcon>
                  </NavItem>
              )}  

              {this.renderNav()}

                   
              
              </SideNav.Nav>
              </SideNav>
          )
      }
  
  }

  function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAutenticated,
        roles: state.roles.roles
    };
}

export default connect(mapStateToProps)(withRouter(Sidnav)); 

