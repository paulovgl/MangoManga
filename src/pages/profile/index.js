import React, { Component, Fragment } from 'react';
import {Main} from '../../components/main';
import {MDBRow, MDBCol} from 'mdbreact';
import {MMCard} from '../../components/card/'
import Api from '../../core/api'

export default class Profile extends Component {

  state = {
    finished: Number(0),
    manga: [     
    ]
  }


  componentDidMount(){
    this.getData();
    this.setState({finished: this.state.manga.filter((f)=> f.status === '2').length})
  }

  async getData (){     
    Api.getShowMangaUser().then(
      res => {        
        if (res.status === 'success'){
          let data = [];
          res.data.data.map((x,y)=> {
            console.log()
              data.push({ 
                id: x.id,
                title: x.title,
                image: `data:image/png;base64,${x.avatar}`,
              }) 
          })           
          this.setState({manga: data})
        }
      }        
    )
  }

  Manga(){
    if(this.state.manga.length > 0){
      return (
        <MDBRow>
          {
            this.state.manga.map((x, y) => {
              return (
                <MDBCol key={`${y}manga`} lg='2' md='3' sm='6' >
                  <MMCard title={x.title} id={x.id} image={x.image} chapter={x.chapter} />
                </MDBCol>
            )
          })
        }
        </MDBRow>
      )
    }

  }

  MangaFinished(){  
    if(this.state.manga.length > 0){
      
      let finished  = this.state.manga.filter((f) => f.status === '2');     
      if(finished.length > 0){
        return (
          <MDBRow>
            {
              this.finished.map((x, y) => {             
                  return (                
                    <MDBCol  key={`${y}mangaFinished`} lg='2' md='3' sm='6' >
                      <MMCard title={x.title} id={x.id} image={x.image} chapter={x.chapter} /> 
                    </MDBCol>
                )                          
            })
          }
          </MDBRow>
        )
      }     
    }
    
  }


  render (){
    return (
      <Fragment>
        <Main>

        <div className="App">

            <div>
                <h5 className='text-left mb-3' style={{fontWeight: 500}}>Meus Mangas ({this.state.manga.length})</h5>
                {this.Manga()}
            </div>

            <div>
                <h5 className='text-left mb-3'style={{fontWeight: 500}}>Mangas Finalizados ({this.state.finished})</h5>
                {this.MangaFinished()}
            </div>

        </div>
          
        </Main>
      </Fragment>
    )
  }
}