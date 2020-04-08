import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite'
import { MMTheme} from '../theme';
import DatePicker from 'react-date-picker';
// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import pt_BR from 'date-fns/locale/pt-BR';
// import "react-datepicker/dist/react-datepicker.css";
import "./form.scss";


const styles = (theme) => StyleSheet.create({
    swsInput: {
    borderColor: theme.input.text.border,
    background: theme.input.text.background,    
    color: theme.input.text.color,
    '::placeholder': {
      color: theme.input.text.placeholder.color,     
    }   
  },
  swsFile:{
    borderColor: theme.input.text.border,
    background: theme.input.text.background, 
    color: theme.input.text.color,
    '::-webkit-file-upload-button':{
      backgroundColor: theme.buttons.default.background,
      padding: '0.5rem 1.6rem',
      fontSize: `0.64rem`,
      color: theme.buttons.default.color,
      textTransform: 'uppercase',
      wordWrap: 'break-word',
      whiteSpace: 'normal',
      cursor: 'pointer',
      borderRadius: '0.125rem',
      border: 0,
      boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)`,
      transition: `color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out` 

    },    
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

  swsSectionForm: {
    color: theme.input.section.color,
    fontWeight: 'bold',
    marginBotton: 0,
    marginRight: 15
  },

  swsSectionFormLine: {
    backgroundColor: theme.input.section.hr.color,
  },
  swsDatePicker:{
    background: "#f4ff"
  }
})


class MMSection extends Component{
  static contextType = MMTheme
  render(){
    let theme = this.context
    let props = this.props
    return (
      <>
      <div style={{display:'flex', alignItems:'center'}}>
      <h6 className={css(styles(theme).swsSectionForm)}>
        {props.title}
      </h6>
        {props.children}
      </div>     
      <hr className={css(styles(theme).swsSectionFormLine)}  />
      </>
    )
  }
}

class MMFile extends Component {
  static contextType = MMTheme
  render(){
  let props = this.props
  let theme = this.context
  return (
    <div className="form-group">  
      <label  className={css(styles(theme).swsLabel)} htmlFor={props.id}>
      <span className='control-label' >
       {props.label}
      </span> 
      </label> 
    {/* <span>a</span> 
    <div className="custom-file"> */}
      <input        
        type="file"
        name={props.name}
        className={`form-control-file pt-1 pb-1 ${css(styles(theme).swsFile)}`}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        accept={props.accept}
        // aria-describedby="inputGroupFileAddon01"
      />    
    {/* </div>         */}
  </div> 
  )
  }
}


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
class MMDatepicker extends Component {
  static contextType = MMTheme
  render(){
   let theme = this.context
   let props = this.props
   return (     
    <div className="form-group">
        <label  htmlFor={props.id} > <span className={` ${css(styles(theme).swsLabel)} control-label `} >{props.label}</span ></label>
    <DatePicker
    // locale={pt_BR}
    name={props.name}  
    value={props.value ? props.value : ''}  
    selected={props.start ? props.start : new Date()}
    onChange={props.onChange}
    format="dd-MM-y"
    className={`${css(styles(theme).swsInput)}   form-control form-control-md p-0`}
    popperClassName={'d-block'}
    // calendarClassName={css(styles(theme).swsDatePicker)}
    // dayClassName={css({color: 'red'})}
  />
    </div>
   )
  }
}

export {MMInput, MMSelect, MMInputArea, MMSection, MMFile, MMDatepicker }
