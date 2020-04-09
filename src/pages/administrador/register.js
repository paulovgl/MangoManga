import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import { MMInput, MMFile } from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'
import {MMBtnReturn, MMBtnSubmit} from '../../components/buttons';
import Api from '../../core/api/';
import PopUp from '../../components/notifications/';
import imgdef from '../../images/Avatar.webp'

class RegisterAdministrador extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
    avatar: null,
  }
  this.state = this.stateInitial
  this.handleSelectChange = this.handleSelectChange.bind(this);
  this.handleFileChange = this.handleFileChange.bind(this);
}

  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  listenSubmit = event => {

    Api.createAdministrador(this.state).then(
      res => {        
        if(res.status === 'success'){
          console.log(res)
          PopUp.showMessage('success', res.data.message)
        }
        else if( res.status === 'error'){
          res.content.map((x,y) => {
            PopUp.showMessage('error', x.message)
          })
        }
      }
    )    
  }

    //  Modify Select
    handleSelectChange(event) {
      const { name, value } = event.target
      this.setState({ [name]: { ...this.state[name], value: value, } });      
  }

  handleFileChange(event) {
    const { name, files } = event.target
    
    let reader = new FileReader();
    let file = files[0];
    reader.onload = () => {
        this.setState({ [name]: reader.result });
    }
    reader.readAsDataURL(file);
}

  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Cadastrar Administrador'>
          
          <MDBRow>

            <MDBCol md='12' lg='4'>
              <MMInput name='email' type='email' label='Email' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='4'>
              <MMInput name='username' label='Nome de Usuário' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='4'>
              <MMInput name='password' type='password' label='Senha' onChange={this.listinput}/>
            </MDBCol>
            <MDBCol md='12' lg='4'>
              <MMInput type='password' name='password_confirmation' label='Confirmar Senha' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='2' className=''>    
            
            <img class src={this.state.avatar === null ? imgdef : this.state.avatar}  height={80} width={80} alt='' className="img-fluid float-right" /> 
            </MDBCol>  
            <MDBCol md='12' lg='4' className='pl-0'>                     
            <MMFile
              label='Avatar'
              name="avatar"
              onChange={this.handleFileChange}
              id='avatar' //Mesmo name
              accept="image/png, image/jpeg, image/jpg" //
              />
            </MDBCol>
           

          </MDBRow>

          <center>
              <MMBtnReturn />
              <MMBtnSubmit onClick={() => this.listenSubmit()} />
            </center>

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default RegisterAdministrador;