import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';


const styles = StyleSheet.create({
  switchDiv:{
    marginTop: 5.9  
  }
});

class MMSwitchTheme extends Component {

  render(){
    return (
      <>      
      <div className={`custom-control custom-switch ${css(styles.switchDiv)} `}>        
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          checked={this.props.status} 
          onChange={this.props.onChange}
        />    
        <label className='custom-control-label' htmlFor='customSwitches'>
          {/* Modo Escuro */}
        </label>    
      </div>
      </>
      ); 
  }
}

export {MMSwitchTheme}