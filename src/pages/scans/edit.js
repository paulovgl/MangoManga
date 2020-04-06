import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import { MMInput } from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'
import {MMBtnReturn, MMBtnSubmit} from '../../components/buttons'
import Api from '../../core/api/';
import PopUp from '../../components/notifications/';

class EditScan extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
    nome: '',
    
  }
  this.state = this.stateInitial
  this.handleSelectChange = this.handleSelectChange.bind(this);
}


  componentDidMount(){
    this.getData();
  }

  async getData(){
    const param = this.props.match.params.id;
    Api.getEditScan(param).then(      
      res => {
        console.log(res)
      if(res.status === 'success'){
        this.setState(res.data.data)
      }
      else if( res.status === 'error'){
        res.content.map((x,y) => {
          PopUp.showMessage('error', x.message)
        })      
        this.props.history.push('/');
      }
    }
    )
  }
  
  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  listenSubmit= event => {
    const id = this.props.match.params.id;
    Api.updateScan(id, this.state).then(
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

        <MMCardView title='Atualizar Scan' >
          
          <MDBRow>

            <MDBCol md='12' lg='6'>
              <MMInput name='name' value={this.state.name} label='Nome' onChange={this.listinput}/>             
            </MDBCol>
            <MDBCol md='12' lg='6'>              
              <MMInput value={this.state.url} type='url' name='url' label='URL/Pagina de Informação' onChange={this.listinput}/>
            </MDBCol>

          </MDBRow>

            <center>
              <MMBtnReturn />
              <MMBtnSubmit update onClick={()=> this.listenSubmit()}   />
            </center>

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default EditScan;