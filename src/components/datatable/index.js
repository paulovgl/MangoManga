import React, { Component } from 'react';
import { MDBDataTable, MDBBtn, MDBIcon, MDBInput} from 'mdbreact'
import {Route} from 'react-router-dom'
import PopUp from '../notifications'
import {MMTheme} from '../theme'
import Api from '../../core/api'
import {MMButton} from '../buttons'
import {MMPopoverRemove} from '../popover'

class MMDataTable extends Component {

  state= {
    table: this.props.data
  }
  static contextType = MMTheme


  show = (id, history, location, route) => { 
    if(route !== undefined){
      history.push(`/${route}/${id}/show`)
    }
    else{
      history.push(`${location.pathname}/${id}/show`)
    }
      
  }

  edit = (id, history, location, route) => {
    if(route !== undefined){
      history.push(`/${route}/${id}/edit`)
    }
    else{
      history.push(`${location.pathname}/${id}/edit`)
    }
  }

  remove = async (id, route) => {
    if (route !== undefined) {
     await Api[route](id).then(res => {
        if (res.message === 'success') { 
          let index = this.state.table.rows.indexOf(this.state.table.rows.find((f) => f.id === id )) 
          let filteredRows = this.state.table.rows.filter(row => row !== this.state.table.rows[index]); 
          this.setState({table:{...this.state.table, rows:filteredRows}})                       
          PopUp.showMessage('success', res.content)
        }
        else if (res.message === 'error') {
          res.content.map((x, y) => {         
            PopUp.showMessage('error', x.message)
          })
        }
      }).catch(err => PopUp.showMessage('error', 'Falha ao Remover'))
    }
  }  
  



  componentDidMount(){
    if(this.props.hasOwnProperty('actions')){
      this.actions(this.props.actions)
    } 
  }


  actions(props){
    this.setState(prevState => ({
      table: {
        ...prevState.table,
        columns:[
          ...prevState.table.columns,
          {
            label:'Ações',
            field: 'actions',
            sort: 'disabled',
            width: '150'
          }
        ]
      }
    }))

    let action = [];
    let count = 1;
    if(props.hasOwnProperty('actions') && props.hasOwnProperty('route')){  
      this.state.table.rows.map((x,y)=> {

        if(props.actions.includes('show')){
          let show = <Route key={count} render={({history, location}) => (
            <MDBBtn color='info' onClick={()=> this.show(x.id, history, location, props.route)} className='btn-sm px-3'><MDBIcon icon='eye'/></MDBBtn> 
          )} />
          action.push(show)
          count++
        }
        if(props.actions.includes('edit')){
          let edit = <Route key={count} render={({history, location}) => (
            <MDBBtn color='warning' onClick={()=> this.edit(x.id, history, location, props.route)} className='btn-sm px-3'><MDBIcon icon='edit'/></MDBBtn> 
          )} />
          action.push(edit)
          count++
        }
        if(props.actions.includes('remove')){
          let remove = (<MMPopoverRemove key={count} id={`#${y}`} onClick={()=> this.remove(x.id, props.actions.route)} />)
          action.push(remove)
          count++
        }
        
        x.actions = <div key={y}>{action}</div> 
        action = []
      })
    }   
    
  }

  create(props, theme, route){
    if(props.hasOwnProperty('actions')){
      if(props.actions.actions.includes('create')){
        return <Route render={({ history, location }) => (<button className='btn btn-sm' onClick={()=>{history.push(`/${route}/create`)}} style={{backgroundColor: theme.buttons.default.background, color: theme.buttons.default.color}} ><MDBIcon icon='plus'/> Adicionar</button> )} />
      }
    }
  }



  render() {
    let theme = this.context
    
    return (

      <>
      <div style={{justifyContent:'space-between', flexDirection: 'row', display:'flex'}}>
        <div>
          {this.props.actions && this.props.actions.route ? this.create(this.props, theme, this.props.actions.route) : '' }          
        </div>
      </div> 
      
      <MDBDataTable
        responsiveLg
        // autoWidth
        theadColor = {theme.datatables.thead.background}
        theadTextWhite = {theme.datatables.thead.color}
        tbodyColor = {this.props.tbodyColor ? this.props.tbodyColor : theme.datatables.tbody.background}
        tbodyTextWhite = {theme.datatables.tbody.color}
        paginationLabel = {['Anterior', 'Próximo']}     
        infoLabel={["Mostrando", "de", "até", "registros"]} 
        entriesLabel = {'Número de Registros'}
        noRecordsFoundLabel= {"Registros não encontrados"}
        searchLabel={"Buscar"}     
        // striped
        info={this.props.info !== undefined ? this.props.info : true }
        paging={this.props.paging !== undefined ? this.props.paging : true }
        searching={this.props.searching !== undefined ? this.props.searching : true }
        noBottomColumns
        bordered
        dark={theme.datatables.dark}
        data={this.state.table}                
      >        
        
      </MDBDataTable>
      </>
      
    )
  }
}
export { MMDataTable }