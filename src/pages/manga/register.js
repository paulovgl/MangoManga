import React, {Component, Fragment} from 'react';
import {Main} from '../../components/main'
import {MMCardView} from '../../components/card'
import {MMInput, MMSelect, MMInputArea, MMSection, MMFile} from '../../components/formulario'
import {MDBRow, MDBCol} from 'mdbreact'
import { MMBtnReturn, MMBtnSubmit, MMButton } from '../../components/buttons/index'
import Api from '../../core/api';
import imgdef from '../../images/mangabg.png'
import PopUp from '../../components/notifications'

class RegisterManga extends Component {

  constructor(prop) {
    super(prop)
    this.stateInitial = {
    title: '',
    autores: [],
    avatar: null, //file
    scans: [],
    generos:[],
    active: {
      options: [
        {label: 'Ativo', value: 0},
        {label: 'Finalizado', value: 1},
        {label: 'Suspenso', value: 2},       
      ],
      value: null
    },
    autor: {
      options: [
        {label: 'Autor 01', value: '1'},
        {label: 'Autor 02', value: '2'}       
      ],
      value: null
    },
    scan: {
      options: [
        {label: 'Scan 01', value: '1'},
        {label: 'Scan 02', value: '2'}       
      ],
      value: null
    },

    genero: {
      options: [
        {label: 'Scan 01', value: '1'},
        {label: 'Scan 02', value: '2'}       
      ],
      value: null
    },

    editora: {
      options: [
        {label: 'Editora 01', value: '1'},
        {label: 'Editora 02', value: '2'}       
      ],
      value: null
    },
    description: '',    

  }
  this.state = this.stateInitial
  this.handleSelectChange = this.handleSelectChange.bind(this);
  this.handleFileChange = this.handleFileChange.bind(this); //avatar
}


  addInput (e, name) {
    this.setState({[name]: [...this.state[name], '']})
  }

  removeInput(e, y, name){
    this.state[name].splice(y, 1)
    this.setState({[name]: this.state[name]})
  }

   //  Modify Select
   handleSelectChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: { ...this.state[name], value: value, } });      
  }

  // Modify Avatar

  handleFileChange(event) {
    const { name, files } = event.target
    
    let reader = new FileReader();
    let file = files[0];
    reader.onload = () => {
        this.setState({ [name]: reader.result });
    }
    reader.readAsDataURL(file);
}



  

  componentDidMount(){
    this.getData();
  }

  async getData(){
    Api.getShowEditora().then(
      res => {
        if (res.status === 'success'){
          let editora = {options: [], value: null}
          if(res.data.data.length > 0){            
            res.data.data.map((x,y) => {
              editora.options.push({label: x.name, value: x.id })
            })
          }
          this.setState({editora: editora})
        }
      }
    )
    Api.getShowAutor().then(
      res => {
        if (res.status === 'success'){
          let autor = {options: [], value: null}
          if(res.data.data.length > 0){            
            res.data.data.map((x,y) => {
              autor.options.push({label: x.name, value: x.id })
            })
          }
          this.setState({autor: autor})
        }
      }
    )

    Api.getShowScan().then(
      res => {
        if (res.status === 'success'){
          let scan = {options: [], value: null}
          if(res.data.data.length > 0){            
            res.data.data.map((x,y) => {
              scan.options.push({label: x.name, value: x.id })
            })
          }
          this.setState({scan: scan})
        }
      }
    )

    Api.getShowGenero().then(
      res => {
        if (res.status === 'success'){
          let genero = {options: [], value: null}
          if(res.data.data.length > 0){            
            res.data.data.map((x,y) => {
              genero.options.push({label: x.name, value: x.id })
            })
          }
          this.setState({genero: genero})
        }
      }
    )

  }

  listSubmit(){

    console.log(this.state.avatar)
     
     let sub = {
       description: this.state.description,
       autores: this.state.autores,
       editora_id: this.state.editora.value,
       scans: this.state.scans,
       generos: this.state.generos,
       title: this.state.title,
       status:  this.state.active.value,
       avatar: this.state.avatar
     }
     
     Api.createManga(sub).then(       
        res => {        
          if(res.status === 'success'){
            console.log(res)
            PopUp.showMessage('success', res.data.message)
          }
          else if( res.status === 'error'){
            res.content.map((x,y) => {
              PopUp.showMessage('error', x.message)
            })
          }
        }
     )   
  }

  listinput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleCustomChange(e, id, name){
    this.state[name][id] = e.target.value
    console.log(e.target)
    this.setState({[name]: this.state[name]})
  }   

  render (){
    return (
      <Fragment>
      <Main>

        <MMCardView title='Cadastrar Mangá'>
          
          <MDBRow>
            <MDBCol md='12' lg='4'>
              <MMInput name='title' label='Nome' onChange={this.listinput}/>
            </MDBCol>
            <MDBCol md='12' lg='4'>           
            <MMSelect
              label='Editora:'
              name='editora'             
              selectTitle='Selecione a Editora'
              onChange={this.handleSelectChange}
              options={this.state.editora.options} 
              value={this.state.editora.value}
          />
          </MDBCol>
          <MDBCol md='12' lg='4'>           
            <MMSelect
              label='Ativo:'
              name='active'             
              selectTitle='Selecione o Status'
              onChange={this.handleSelectChange}
              options={this.state.active.options} 
              value={this.state.active.value}
          />
            </MDBCol>

            <MDBCol md='12' lg='2' className='pr-0'>    
            
            <img src={this.state.avatar === null ? imgdef : this.state.avatar} width={80} alt='' className="img-fluid" /> 
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
            <MDBCol md='12' lg='12'>
            <MMSection title={`Autor`}>
                <MMButton title='+' sm onClick={(e)=> this.addInput(e, 'autores')} />               
            </MMSection>

            {this.state.autores?.map((x,y) => {
             return (
             <div key={`${y}au`}>
                {/* <input type='text' value={x} onChange={(e)=> this.handleCustomChange(e, y, 'autores')} />    */}
                <MDBRow style={{alignItems:'center'}} >
                <MDBCol md='6' lg='6' className='pr-0'>
                    <MMSelect
                  label={`Autor: ${y+1} `}
                  name='autores'p 
                  selectTitle='Selecione a Autor'
                  onChange={(e)=> this.handleCustomChange(e, y, 'autores')}
                  options={this.state.autor.options} 
                  value={x}               
              />
               </MDBCol>
               <MDBCol md='3' lg='3' className='pl-0 mt-3'>
                  <MMButton sm title='-'  onClick={(e)=> this.removeInput(e, y, 'autores')} />
               </MDBCol>
               </MDBRow>                                
             </div>) 
            })} 
            </MDBCol>

            <MDBCol md='12' lg='12'>
            <MMSection title={`Scans`}>
                <MMButton title='+' sm onClick={(e)=> this.addInput(e, 'scans')} />               
            </MMSection>

            {this.state.scans?.map((x,y) => {
             return (
             <div key={`${y}au`}>
                {/* <input type='text' value={x} onChange={(e)=> this.handleCustomChange(e, y, 'autores')} />    */}
                <MDBRow style={{alignItems:'center'}} >
                <MDBCol md='6' lg='6' className='pr-0'>
                    <MMSelect
                  label={`Scan: ${y+1} `}
                  name='scans'             
                  selectTitle='Selecione a Scan'
                  onChange={(e)=> this.handleCustomChange(e, y, 'scans')}
                  options={this.state.scan.options} 
                  value={x}               
              />
               </MDBCol>
               <MDBCol md='3' lg='3' className='pl-0 mt-3'>
                  <MMButton sm title='-'  onClick={(e)=> this.removeInput(e, y, 'scans')} />
               </MDBCol>
               </MDBRow>                                
             </div>) 
            })} 
            </MDBCol>

            <MDBCol md='12' lg='12'>
            <MMSection title={`Gêneros`}>
                <MMButton title='+' sm onClick={(e)=> this.addInput(e, 'generos')} />               
            </MMSection>

            {this.state.generos?.map((x,y) => {
             return (
             <div key={`${y}au`}>
                {/* <input type='text' value={x} onChange={(e)=> this.handleCustomChange(e, y, 'autores')} />    */}
                <MDBRow style={{alignItems:'center'}} >
                <MDBCol md='6' lg='6' className='pr-0'>
                    <MMSelect
                  label={`Gênero: ${y+1} `}
                  name='generos'             
                  selectTitle='Selecione os Gêneros'
                  onChange={(e)=> this.handleCustomChange(e, y, 'generos')}
                  options={this.state.genero.options} 
                  value={x}               
              />
               </MDBCol>
               <MDBCol md='3' lg='3' className='pl-0 mt-3'>
                  <MMButton sm title='-'  onClick={(e)=> this.removeInput(e, y, 'generos')} />
               </MDBCol>
               </MDBRow>                                
             </div>) 
            })} 
            </MDBCol> 

            <MDBCol md='12' lg='12'>
                <MMInputArea label='Descrição:' name='description' onChange={this.listinput} rows='4'  />
               </MDBCol>         

          </MDBRow>
          <center>
              <MMBtnReturn />
              <MMBtnSubmit className='red darken-2' onClick={()=> {this.listSubmit()}} />
          </center>
          

        </MMCardView>
        
      </Main>
      </Fragment>
    )
  }


}

export default RegisterManga;