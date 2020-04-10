import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import PopUp from '../../components/notifications/';
// import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent, permissions) {

  class Authenticate extends Component { 

    componentWillMount() {       
      if (!this.props.isAuthenticated) {        
        this.props.history.push('/login');
      }
      if(permissions !== undefined && Array.isArray(permissions)){ 
        let keys = []   
        console.log(this.props)
        // Object.entries(this.props.roles).map((e, f)=> {         
        //   let search = permissions.find((k) => k === e[0] )
        //   if(search !== undefined){
        //     if(search === e[0]){
        //       keys.push(e[1])
        //     }
        //   }
        // })
        // let hasPermission = keys.find((f => f === true))  
        // if(hasPermission === undefined){
        //    PopUp.showMessage('error', 'Você não tem permissão de acesso!!')
        //    this.props.history.push('/');
        // }            
      }
       
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
 
  function mapStateToProps(state){
    return {
      isAuthenticated: state.auth.isAutenticated,
      roles: state.roles.roles
    };
  }

  return connect(mapStateToProps)(Authenticate);
}