import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMDataTable} from '../../components/datatable'
import {MMCardView} from '../../components/card'
import Api from '../../core/api'
import PopUp from '../../components/notifications'
import {MMSpinner} from '../../components/loading'

class GeneroListagem extends Component{

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
      {label: 'Número de Mangas', field: 'n_manga'},    

    ]
    let rows = [];   
    await Api.getShowGenero().then(res => {
      if(res.status === 'success'){
        

          res.data.data.map((x,y)=> {
          rows.push({
            id: x.id,
            title: x.name, 
            n_manga: x.__meta__.n_manga
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
      actions={{ actions: ['edit', 'remove', 'create'], route: 'genero' }}  />
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
            <MMCardView title='Listagem dos Gêneros'>
                {this.renderData()}
             </MMCardView>
          </Main>
        </Fragment>          
      )
  }

}

export default GeneroListagem