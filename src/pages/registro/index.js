import React, { Component } from 'react';
import {MDBCard, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardBody } from 'mdbreact';
import '../login/inicio.scss'
import {MMButton} from '../../components/buttons/index'

export default class registro extends Component {

  state = {
    email: '',
    nome: '',    
    password: '',
    password_confirmation: '', 
  }

  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })   
    console.log(this.state[name]) 
  }

  render (){

    return (
      // <Fragment>
      <div className='bg'>
         <MDBContainer className="pt-5">
      <div className='d-flex justify-content-center'>
         <MDBCard className='' style={style.card}>
          {/* <MDBContainer> */}
          <MDBCardBody>
            <MDBRow>
              <MDBCol>
                <form>
                  <p className="h4 text-center mb-4">Registro</p>

                  <label htmlFor="defaultFormLoginnomeEx" className="grey-text">
                    Nome
                  </label>
                  <input onChange={this.listinput} type="text" name='nome' id="defaultFormLoginnomeEx" className="form-control" />
                  <br />

                  <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    Email
                  </label>
                  <input onChange={this.listinput} type="email" name='email' id="defaultFormLoginEmailEx" className="form-control" />
                  <br />
                  
                  <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Digite sua senha
                  </label>
                  <input  onChange={this.listinput} name='password' type="password" id="defaultFormLoginPasswordEx" className="form-control" />

                  <label htmlFor="defaultFormLoginPasswordComfirmEx" className="grey-text">
                    Confirme a senha
                  </label>
                  <input  onChange={this.listinput} name='password_confirmation' type="password" id="defaultFormLoginPasswordComfirmEx" className="form-control" />
                  
                  <div className="text-center mt-4">
                    <MMButton onClick={()=>{this.props.history.push('/')}} title='Registrar' /> 
                    <MMButton onClick={()=>{ this.props.history.push('/login') }} title='Voltar' />
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          {/* </MDBContainer> */}
          </MDBCardBody>
         </MDBCard>     
      </div>
      </MDBContainer>
      </div>
      // </Fragment>
    )
  }
}

const style = {
    card:{
      width: 350,
      margin: 'auto'
    }
}
