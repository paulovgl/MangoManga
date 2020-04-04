import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { withRouter } from 'react-router';
import {MDBIcon } from 'mdbreact';
import logo from '../../images/logo.png'


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
      const nav = [

        {
            type: 'unique',
            title: 'Início',
            icon: { size: '2x', icon: 'home' },
            eventKey: '',
        },
        {
            type: 'unique',
            title: 'Perfil',
            icon: { size: '2x', icon: 'user' },
            eventKey: 'profile',
        },
        {
            type: 'unique',
            title: 'Buscar',
            icon: { size: '2x', icon: 'search' },
            eventKey: 'search',
        },
        
        {
            type: 'multiple',
            title: 'Cadastro',
            eventKey: 'configure',
            icon: { size: '2x', icon: 'book-open' },
            dropdown: [
                {
                    title: 'Manga',
                    eventKey: 'manga/create', 
                },
                {
                    title: 'Editora',
                    eventKey: 'editora/create', 
                },
                {
                    title: 'Autor',
                    eventKey: 'author/create', 
                },
                {
                    title: 'Gênero',
                    eventKey: 'genero/create', 
                },
                {
                    title: 'Scan',
                    eventKey: 'scans/create', 
                },
                
            ]
        },
        {
            type: 'multiple',
            title: 'Configuração',
            eventKey: 'configure',
            icon: { size: '2x', icon: 'cogs' },
            dropdown: [
                {
                    title: 'Administrador',
                    eventKey: 'admin/create', 
                },   
                {
                    title: 'Editor',
                    eventKey: 'editor/create', 
                },               
            ]
        }
      ]  
      
      
      return nav?.map((x,y)=> {
          if(x.type === 'unique'){
             return  (
                <NavItem key={y} eventKey={x.eventKey}>
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
            <NavItem key={y} eventKey={x.eventKey} >
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
                            //  navitemStyle={{display:displayinMenu(i.permission, this.props.roles)}}
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

  export default withRouter(Sidnav)

