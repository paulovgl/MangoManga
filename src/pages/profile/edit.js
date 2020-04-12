import React, { Component, Fragment } from 'react';
import {Main} from '../../components/main';
//import { StyleSheet, css } from 'aphrodite';
import {MMCardView} from '../../components/card';
import { MMInput, MMFile } from '../../components/formulario';
import { MMBtnSubmit, MMBtnReturn } from '../../components/buttons';
import {MDBRow, MDBCol} from 'mdbreact';
import Api from '../../core/api';
import PopUp from '../../components/notifications'
import imgdef from '../../images/Avatar.webp'


export default class ProfileEdit extends Component {
  
  constructor(props){
    super(props)
    this.state = {
   
        email: '',
        username: '',    
        password: '',
        password_confirmation: '',       
    }
    this.handleFileChange = this.handleFileChange.bind(this)
  }  

  componentDidMount(){
    this.getData();
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

  async getData(){
    Api.getShowEditProfile().then(res => {
      if(res.status === 'success'){
        if(res.data.data.avatar !== null){
          res.data.data.avatar = `data:image/png;base64,${res.data.data.avatar}`
        }
        this.setState(res.data.data)
      }
      else if( res.status === 'error'){
        res.content.map((x,y) => {
          PopUp.showMessage('error', x.message)
        })      
        this.props.history.push('/');
      }
    })
  }

  listenSubmit = event => {
    Api.updateProfile(this.state).then(res => {
      if(res.status === 'success'){
        PopUp.showMessage('success', res.data.message)
      }
      else if( res.status === 'error'){
        res.content.map((x,y) => {
          PopUp.showMessage('error', x.message)
        }) 
      }
    })
  } 

  listInput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  
  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Editar Usuário'>
          
          <MDBRow>

            <MDBCol md='12' lg='6'>
              <MMInput name='username' onChange={this.listInput} label='Nome de usuário' value={this.state.username}/>
            </MDBCol>
              
            <MDBCol md='12' lg='6'>
              <MMInput name='email' onChange={this.listInput} label='E-mail' value={this.state.email}/>
            </MDBCol>

            <MDBCol md='12' lg='3'>
              <MMInput type='password' name='password' onChange={this.listInput} label='Senha' value={this.state.password}/>
            </MDBCol>

            <MDBCol md='12' lg='3'>
              <MMInput type='password' name='password_confirmation' onChange={this.listInput} label='Confirmar Senha' value={this.state.password_confirmation} />
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
          <MMBtnSubmit update onClick={()=> this.listenSubmit()} />
          </center>
          

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }
}