import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import { MMInput } from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'
import {MMBtnReturn, MMBtnSubmit} from '../../components/buttons'
import Api from '../../core/api/';
import PopUp from '../../components/notifications/';


class RegisterEditora extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
    name: '',
    url: '',    
  }
  this.state = this.stateInitial
  this.handleSelectChange = this.handleSelectChange.bind(this);
}

  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  listSubmit = event => {

    Api.createEditora(this.state).then(
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

  

  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Cadastrar Editora'>
          
          <MDBRow>

            <MDBCol md='12' lg='6'>
              <MMInput name='name' label='Nome' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='6'>
              <MMInput type='url' name='url' label='Página da Editora/URL de informação' onChange={this.listinput}/>
            </MDBCol>

          </MDBRow>
            <center>
              <MMBtnReturn />
              <MMBtnSubmit onClick={()=> this.listSubmit()}  />
            </center>

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default RegisterEditora;