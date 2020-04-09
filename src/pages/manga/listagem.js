import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMDataTable} from '../../components/datatable'
import {MMCardView} from '../../components/card'
import Api from '../../core/api'
import PopUp from '../../components/notifications'
import {MMSpinner} from '../../components/loading'

class MangaListagem extends Component{

  state = {
    // data: {
    //   // columns: [
    //   //   {label: 'Nome', field: 'name'},
    //   //   {label: 'Idade', field: 'age'}
    //   // ],
    //   // rows: [
    //   //   {id: 1, name: 'Mateus', age: 25},
    //   //   {id: 2, name: 'Paulete', age: 19},
    //   // ]
    // }
  }

  componentDidMount(){
    this.getData()
  }

  async getData(){
    let columns = [
      {label: 'Titulo', field: 'title'},
      {label: 'Gêneros', field: 'genre'},
      {label: 'Scans', field: 'scans' },
      {label: 'Editora', field: 'editora'},
      {label: 'Status', field: 'status'},
    ]
    let rows = [];   
    await Api.getShowAllManga().then(res => {
      if(res.status === 'success'){
        
        res.data.data.map((x,y)=> {         
           let editoras = '';
           if (x.editora){
             editoras =  x.editora.name
           }
          let generos = [];
          x.generos.map((i,j) => {
              generos.push(i.name)
          })
          let autores = [];
          x.autores.map((i,j) => {
              autores.push(i.name)
          })
          let scans = [];
          x.scans.map((i,j) => {
              scans.push(i.name)
          })         
          let status = {"0": 'Ativo', "1": "Suspenso", "2": "Completo", "3": "Cancelado" }

          rows.push({
            id: x.id,
            title: x.title, 
            genre: generos.toString(),
            autor: autores.toString(),
            scans: scans.toString(),
            editora: editoras,
            status: status[x.status],                     
          })
        })   
        
        let data = { columns, rows }       

        this.setState({data: data})
        // console.log(this.state.manga)
      }
      else if( res.status === 'error'){
        res.content.map((x,y) => {
          PopUp.showMessage('error', x.message)
        })      
        this.props.history.push('/');
      }
    })
  }


  renderData(){
    if(this.state.data){
      return (
      <MMDataTable data={this.state.data} 
      actions={{ actions: ['show', 'edit', 'remove', 'create'], route: 'manga' }}  />
      )
    }
    else{
      return (
        <MMSpinner/>
      )
    }
  }
  render(){
      return (
        <Fragment>
          <Main>
            <MMCardView title='Listagem dos Mangas'>
                {this.renderData()}
             </MMCardView>
          </Main>
        </Fragment>          
      )
  }

}

export default MangaListagem