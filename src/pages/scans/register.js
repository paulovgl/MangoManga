import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import { MMInput } from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'
import {MMBtnReturn, MMBtnSubmit} from '../../components/buttons'

class RegisterScan extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
    nome: '',
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

    //  Modify Select
    handleSelectChange(event) {
      const { name, value } = event.target
      this.setState({ [name]: { ...this.state[name], value: value, } });      
  }

  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Cadastrar Scan'>
          
          <MDBRow>

            <MDBCol md='12' lg='6'>
              <MMInput name='nome' label='Nome' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='6'>
              <MMInput name='nome' label='URL/Pagina de Informação' onChange={this.listinput}/>
            </MDBCol>

          </MDBRow>

          <center>
              <MMBtnReturn />
              <MMBtnSubmit  />
            </center>

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default RegisterScan;