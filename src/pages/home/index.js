import React, {Component, Fragment} from 'react';
import './home.css'
import {Main} from '../../components/main'
import {MMCard} from '../../components/card/'
import {MDBRow, MDBCol} from 'mdbreact'


 export default class Home extends Component {


  state = {
    manga: [
     {
        id: 1,
        title: 'Black Clover',
        image: 'https://static3.mangalivre.com/capas/XzJfT6TjJArZeQjuoWyWSA/1751/external_cover.jpg',
        chapter: 145        
      },
      {
        id: 2,
        title: 'Kenja no Mago',
        image: 'https://static3.mangalivre.com/capas/Oa1oidkFmjRVjVIGoe-H8Q/3902/capa.jpg',
        chapter: 31  
      },
      {
        id: 3,
        title: 'Solo Leveling',
        image: 'https://unionleitor.top/assets/uploads/mangas/8e157c06.jpg',
        chapter: 110 
      },
      {
        id: 4,
        title: 'I Am The Sorcerer King',
        image: 'https://avt.mkklcdnv6.com/35/c/18-1583498457.jpg',
        chapter: 84  
      },
      {
        id: 5,
        title: 'Paragon of Destruction',
        image: 'https://unionleitor.top/assets/uploads/mangas/017f5320.jpg',
        chapter: 29  
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

  countMangaLastTime(){  
    if(this.state.manga.length > 0){
      return (
        <MDBRow>
          {
            this.state.manga.slice(0).reverse().map((x, y) => {
              return (
                
                <MDBCol  key={`${y}mangaLast`} lg='2' md='3' sm='6' >
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
                <h5 className='text-left mb-3'>Continue ({this.state.manga.length})</h5>

                
                {this.countManga()}

            </div>
            <div>
                <h5 className='text-left mb-3 mt-5'>Você não lê a um tempo ({this.state.manga.length})</h5>

                
                {this.countMangaLastTime()}

            </div>
        </div>
        </Main>
      </Fragment>
     
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Delicia
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    )
  }
}

