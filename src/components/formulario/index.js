import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite'
import { MMTheme} from '../theme';


const styles = (theme) => StyleSheet.create({
    swsInput: {
    borderColor: theme.input.text.border,
    background: theme.input.text.background,    
    color: theme.input.text.color,
    '::placeholder': {
      color: theme.input.text.placeholder.color,     
    }   
  },
  swsLabel: {
    color: theme.input.label.color,
    fontWeight: '500'
  },
  swsSelect:{
    borderColor: theme.input.select.border,
    background:  theme.input.text.background,
    color: theme.input.text.color,
  },
  swsInputArea:{
    borderColor: theme.input.textarea.border,
    background:  theme.input.textarea.background,
    color: theme.input.textarea.color,
    '::placeholder': {
      color: theme.input.textarea.placeholder.color,      
    }
  },
})


class MMInput extends Component {
  static contextType = MMTheme
    render() {
    let props = this.props
    let theme = this.context   
   
    return (
      <>
         <div className="form-group">

          {props.label ?  <label htmlFor={props.id}><span className={` ${css(styles(theme).swsLabel)} control-label `} >{props.label}:</span ></label>  : ''}       
          <input
            onKeyDown={props.onKeyDown? props.onKeyDown : '' }
            style={{onHover:{color:'red'}, }}
            type={props.type}
            className={` ${css(styles(theme).swsInput)}   form-control form-control-md input ${props.validation ? 'validate' : ''} ${props.className ? props.className : ''}`}
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
  static contextType = MMTheme

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
   let theme = this.context
   return (
     <div className="form-group">
     <label   htmlFor={props.id}><span className={` ${css(styles(theme).swsLabel)} control-label `}>{props.label}</span ></label>
     <select disabled={props.disabled ? props.disabled : false} name={props.name} value={props.value} className={`browser-default custom-select select ${css(styles(theme).swsSelect)}`} onChange={props.onChange} placeholder={props.selectTitle}>     
      <option style={{color: 'rgb(62, 69, 81)'}}>{props.selectTitle}</option>
      {this.renderoption(props)}    
    </select>
    </div>
   );
 }

}

class MMInputArea extends Component {
  static contextType = MMTheme
  render(){
  let theme = this.context
  let props = this.props  
  return (
    <div>
        <div className="form-group">
        <label  htmlFor={props.id} > <span className={` ${css(styles(theme).swsLabel)} control-label `} >{props.label}</span ></label>
        <textarea  
          placeholder = {props.placeholder ? props.placeholder : ''}         
          id={props.id}
          value={props.value}
          readOnly={props.readOnly ? true : false}
          onChange={props.onChange}
          className={ `form-control textarea ${props.validation ? 'validate' : ''} ${css(styles(theme).swsInputArea)}`}
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
