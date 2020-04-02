import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import {MMInput, MMSelect, MMInputArea} from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'

class RegisterManga extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
    nome: '',
    editora: {
      options: [
        {label: 'Editora 01', field: '1'},
        {label: 'Editora 02', field: '2'}       
      ],
      value: null
    },
    description: '',
    scan: {
      options: [
        {label: 'Scan 01', field: '1'},
        {label: 'Scan 02', field: '2'}       
      ],
      value: null
    },

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

        <MMCardView title='Cadastrar Mangá'>
          
          <MDBRow>
            <MDBCol md='12' lg='5'>
              <MMInput name='nome' label='Nome' onChange={this.listinput}/>
            </MDBCol>
            <MDBCol md='12' lg='3'>
            <MMSelect
              label='Editora:'
              name='editora'             
              selectTitle='Selecione a Editora'
              onChange={this.handleSelectChange}
              options={this.state.editora.options} 
              value={this.state.editora.value}
          />
            </MDBCol>
            <MDBCol md='12' lg='3'>
            <MMSelect
              label='Scan:'
              name='scan'             
              selectTitle='Selecione a Scan'
              onChange={this.handleSelectChange}
              options={this.state.scan.options} 
              value={this.state.scan.value}
          />
            </MDBCol>
            <MDBCol md='12' lg='12'>
           <MMInputArea label='Descrição:' name='decription' onChange={this.listinput} rows='4'  />

            </MDBCol>
          </MDBRow>

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default RegisterManga;