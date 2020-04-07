import React, { Component } from 'react';
import {MDBBtn, MDBIcon} from 'mdbreact'
import { Route } from 'react-router-dom';

class MMButton extends Component{
  render(){
    return (
      <MDBBtn className={`${this.props.sm ? 'btn-sm' : ''}`} type={this.props.type ? this.props.type : 'button'} onClick={()=> {this.props.onClick()}} color={this.props.color ? this.props.color : 'red darken-2'}>      
          {this.props.title}      
      </MDBBtn>
    )
  }
}

class MMBtnSubmit extends Component{
  MMbutton = props =>{       
        return (
          <MDBBtn  color= 'red darken-2' onClick={props.onClick} type={`button`}>
            <MDBIcon icon={props.icon ? props.icon : 'check'} /> {props.update}
          </MDBBtn>
        )      
  }


  render(){   
    return ( 
     <this.MMbutton icon={this.props.icon} update={this.props.update ? 'Atualizar Dados' : 'Registrar'} submit={this.props.submit} onClick={this.props.onClick}/>
    )
  }
}


class MMBtnReturn extends Component {

  goBack(history){
      history.goBack();
  }
  
  
    MMbutton = props => {
      return (
        <Route render={({ history }) => (<MDBBtn color='red darken-2' onClick={() => { this.goBack(history) }}><MDBIcon icon={props.icon ? props.icon : 'arrow-left'} className='mr-2' />{props.name ? props.name : 'Retornar'}</MDBBtn>)} />
      )
    }  
   
   
    render(){   
      const {title, icon} = this.props
      return(
        <this.MMbutton name={title} icon={icon}/>
      )
    }
  }

  class MMBtnLoginWith extends Component {
    render(){
      let props = this.props      
      return (
        <MDBBtn className={'btn-sm'} color= {props.social === 'facebook' ? 'primary' : 'blue'} onClick={props.onClick} type={`button`}>
            <MDBIcon fab icon={props.social === 'facebook' ? 'facebook-f' : 'twitter'} style={{textAlign: 'left'}} /> <span className='text-center'>{props.title}</span>
        </MDBBtn>
      )
    }
  }
  

export {MMButton, MMBtnReturn, MMBtnSubmit, MMBtnLoginWith}