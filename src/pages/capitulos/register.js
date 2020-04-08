import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import { MMInput, MMSelect, MMDatepicker } from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'
import {MMBtnReturn, MMBtnSubmit} from '../../components/buttons'
import Api from '../../core/api/';
import PopUp from '../../components/notifications/';
import moment from 'moment';


class RegisterCapitulo extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
     title: '',
     capitulo: Number(),
     date: '',
     manga: {
       options: [ {label: '', value: ''}],
       value: null
     },

  }
  this.state = this.stateInitial
  this.handleSelectChange = this.handleSelectChange.bind(this);
  this.handleDatePicker = this.handleDatePicker.bind(this);
}

  componentDidMount(){
    this.getData();
  }

  async getData(){
    Api.getShowMangaSearch().then(res => {
      if(res.status === 'success'){
        let data = {options: [], value: null}
        if(res.data.data.length > 0){            
          res.data.data.map((x,y) => {
            data.options.push({label: x.title, value: x.id })
          })
          this.setState({manga: data})
        }
      }  
    })
  }
  

  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


  listSubmit = event => {  

    let data = {
      title: this.state.title,
      manga_id: this.state.manga.value,
      date: moment(this.state.date[0]).format('YYYY-MM-DD'),
      capitulo: this.state.capitulo
    };
    Api.createCapitulo(data).then(
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

  handleDatePicker(date) {
    // const { name, value } = event.target
    this.setState({ date: [date]});      
}

  

  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Cadastrar Capítulo'>
          
          <MDBRow>

            <MDBCol md='12' lg='4'>
              <MMSelect 
                label='Selecione o Manga'
                onChange={this.handleSelectChange}
                options={this.state.manga.options}
                value={this.state.manga.value}
                name='manga'
              />
            </MDBCol>
            {/* To procurando um datepicker */}

            <MDBCol md='12' lg='4'>
              <MMInput name='title' label='Nome' onChange={this.listinput}/>
            </MDBCol>

            <MDBCol md='12' lg='4'>
              <MMInput type='number' name='capitulo' label='Número do Capitulo' onChange={this.listinput}/>
            </MDBCol> 

            <MDBCol md='12' lg='4'>
              <MMDatepicker  name='date' value={this.state.date} label='Data de Lançamento' onChange={this.handleDatePicker} />
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

export default RegisterCapitulo;