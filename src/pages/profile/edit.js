import React, { Component, Fragment } from 'react';
import {Main} from '../../components/main';
//import { StyleSheet, css } from 'aphrodite';
import {MMCardView} from '../../components/card';
import { MMInput } from '../../components/formulario';
import { MMButton } from '../../components/buttons';
import {MDBRow, MDBCol} from 'mdbreact';



export default class ProfileEdit extends Component {
  
  state = {
    email: 'paulo.lobo@gmail.com',
    nome: 'Paulo Victor',    
    password: '********',
    password_confirmation: '', 
  }
  
  
  
  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Editar Usuário'>
          
          <MDBRow>

            <MDBCol md='12' lg='6'>
              <MMInput name='nome' label='Nome' placeholder={this.state.nome}/>
            </MDBCol>

            <MDBCol md='12' lg='6'>
              <MMInput name='email' label='E-mail' placeholder={this.state.email}/>
            </MDBCol>

            <MDBCol md='12' lg='6'>
              <MMInput name='senha' label='Senha' placeholder={this.state.password}/>
            </MDBCol>

            <MDBCol md='12' lg='6'>
              <MMInput name='conifirmsenha' label='Confirmar Senha' placeholder={this.state.password}/>
            </MDBCol>

          </MDBRow>

          <MMButton title='Salvar Alterações' />

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }
}