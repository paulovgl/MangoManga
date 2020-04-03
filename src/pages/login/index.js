import React, {Component, Fragment} from 'react';
import {MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardBody } from 'mdbreact';
import {MMButton} from '../../components/buttons/index.js'
import './inicio.scss'

 export default class Inicio extends Component {


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
    this.props.history.push('/')
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
                  <p className="h4 text-center mb-4">Sign in</p>
                  <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    Email
                  </label>
                  <input onChange={this.listinput} type="email" name='email' id="defaultFormLoginEmailEx" className="form-control" />
                  <br />
                  <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Senha
                  </label>
                  <input  onChange={this.listinput} name='password' type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                  <div className="text-center mt-4">
                    <MMButton title='Login' onClick={()=>{ this.submitForm() }} />
                    <MMButton title='Registrar' onClick={()=>{ this.props.history.push('/registro') }} />
                    {/* <MDBBtn  color="indigo" type="submit">Login</MDBBtn> 
                    <MDBBtn onClick={()=>{  }} color="indigo" type="submit">Registro</MDBBtn>                    */}
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

