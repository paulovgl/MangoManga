import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import { MMInput } from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'

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

            <MDBCol md='12' lg='5'>
              <MMInput name='nome' label='Nome' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='5'>
              <MMInput name='nome' label='Link' onChange={this.listinput}/>
            </MDBCol>

          </MDBRow>

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default RegisterScan;