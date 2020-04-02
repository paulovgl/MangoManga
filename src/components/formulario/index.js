import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite'

const styles = () => StyleSheet.create({
  swsSelect:{
    borderColor: '#eee',
    background: '#fff',
    color: 'rgb(62, 69, 81)'
  },
  swsInputArea:{
    color: 'rgb(62, 69, 81)', 
    background:'#fff',
    '::placeholder': {
      color: 'rgba(62, 69, 81,0.7)',     
    }
  }

})


class MMInput extends Component {
  // static contextType = SWSTheme
    render() {
    let props = this.props
    // let theme = this.context
   
    return (
      <>
         <div className="form-group">

          <label htmlFor={props.id}><span className='control-la bel' style={{ color: '#d32f2f', fontWeight: '500' }} >{props.label}:</span ></label>         
          <input
            style={{onHover:{color:'red'}, }}
            type={props.type}
            className={`  form-control form-control-md input ${props.validation ? 'validate' : ''} ${props.className ? props.className : ''}`}
            id={props.id}
            readOnly={props.readOnly ? true : false}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />          
        </div>
      </>
    )
  }
}

class MMSelect extends Component {

  renderoption(props){
    if(!props.observe){
      return (
        props.options.map((x, i) => {
          return <option key={i} value={x.value}>{x.label}</option>
        })
      )
    }  
    else{
      if(props.observe[0].value === null || props.observe[0].value === '' ){
        return (
          props.options.map((x, i) => {
            return <option key={i} value={x.value}>{x.label}</option>
          })
        )
      }
      else{
        let filtered = props.options.filter(filtro => {
          return filtro[props.observe[1]] === props.observe[0].value;
        });
        return filtered.map((x, i) => {
          return <option key={i} value={x.value}>{x.label}</option>;
        });
      }      
    }  
  }

  render(){   
   let props = this.props
   return (
     <div className="form-group">
     <label style={{color: '#d32f2f', fontWeight: '500' }}  htmlFor={props.id}><span className='control-label' >{props.label}</span ></label>
     <select disabled={props.disabled ? props.disabled : false} name={props.name} value={props.value} className={`browser-default custom-select select ${css(styles().swsSelect)}`} onChange={props.onChange} placeholder={props.selectTitle}>     
      <option style={{color: 'rgb(62, 69, 81)'}}>{props.selectTitle}</option>
      {this.renderoption(props)}    
    </select>
    </div>
   );
 }

}

class MMInputArea extends Component {
  render(){
  let props = this.props  
  return (
    <div>
        <div className="form-group">
        <label style={{color: '#d32f2f', fontWeight: '500' }}><span className='control-label' >{props.label}</span ></label>
        <textarea  
          placeholder = {props.placeholder ? props.placeholder : ''}         
          id={props.id}
          value={props.value}
          readOnly={props.readOnly ? true : false}
          onChange={props.onChange}
          className={`form-control textarea ${props.validation ? 'validate' : ''} ${css(styles().swsInputArea)}`}
          name={props.name}
          rows={props.rows ? props.rows : '3'}
        >
        </textarea>
        </div>
    </div>
  )
}
}

export {MMInput, MMSelect, MMInputArea }
