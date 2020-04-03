import React, { Component, Fragment } from 'react';
import {Main} from '../../components/main';
import {MDBRow, MDBCol} from 'mdbreact';
import {MMCard} from '../../components/card/'

export default class Profile extends Component {

  state = {
    manga: [
      {
         id: 1,
         title: 'Black Clover',
         image: 'https://static3.mangalivre.com/capas/XzJfT6TjJArZeQjuoWyWSA/1751/external_cover.jpg',
         chapter: 145
       },
       {
        id: 6,
        title: 'Dungeon Reset',
        image: 'https://static3.mangalivre.com/capas/bVbDK_6TnBOqmH_8CB1AZg/9375/external_cover.jpg',
        chapter: 19  
      },
    ]
  }

  countManga(){
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

  countMangaFinished(){  
    if(this.state.manga.length > 0){
      return (
        <MDBRow>
          {
            this.state.manga.slice(0).reverse().map((x, y) => {
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


  render (){
    return (
      <Fragment>
        <Main>

        <div className="App">

            <div>
                <h5 className='text-left mb-3' style={{fontWeight: 500}}>Meus Mangas ({this.state.manga.length})</h5>
                {this.countManga()}
            </div>

            <div>
                <h5 className='text-left mb-3'style={{fontWeight: 500}}>Mangas Finalisados ({this.state.manga.length})</h5>
                {this.countMangaFinished()}
            </div>

        </div>
          
        </Main>
      </Fragment>
    )
  }
}