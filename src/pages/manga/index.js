import React, { Component } from 'react'
import {Main} from '../../components/main'
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBIcon} from 'mdbreact'
import './manga.scss'
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

  mangaAuthor: {
    paddingBotton: 500
  },  
  card: {
    width: 250,
    height: 367,
    borderRadius: 6,
    position: 'relative',
    marginBottom: '0.5em'
  },
  genre:{
    padding: '0.3em',
    backgroundColor: '#3E4551',
    borderRadius: 7,
    marginRight: 2,
    color: '#fff',
    fontWeight: '500'
  },
  mangaTitle:{
    fontWeight: '600',
    fontSize: 30
  },
  mangaDescription:{
    marginTop: 50,   
    fontSize: 14
  },
  chapterList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',    
    display: 'flex',
    alignItems: 'center',
  },
  countChapter:{
    backgroundColor: '#3E4551',
    color: '#fff',
    padding: 5,
    width: 180,
    borderRadius: '0px 6px 0px 6px',
    textAlign: 'center',
  },
  chapterDate: {
    backgroundColor: '#d32f2f',
    maginBotton:0,
    color: '#fff',
    padding: 5,
    width: 100,
    fontSize: 13,
    borderRadius: '0px 6px 0px 6px',
    textAlign: 'center',
    marginLeft: 5  
  },
  chapterNumber: {
    fontSize: 16,
    color: '#3E4551',
    fontWeight: '500'
  },
  chapterTitle: {
    fontSize: 16,
    color: '#d32f2f',
    fontWeight: '500'
  },
  mangaScan: {
    color: '#fff',
    backgroundColor: '#d32f2f',
    borderRadius: 7,
    padding: '0.3em',
    marginLeft: 2,
    // marginRight: 2,
    fontWeight: '500'
  }
});


export default class Manga extends Component {

  state={
    manga: [
      {
         id: 1,
         title: 'Black Clover',
         description: 'Em um mundo em que até as tarefas mais simples do dia a dia são feitas com o uso de magia, quem não consegue usá-la é tratado como nada! Esta é a vida de Asta, um jovem que mesmo sem um pingo de magia, sonha em se tornar o Mago Imperador, o mais forte de todos os magos! Com muito esforço e trabalho duro, será ele capaz de atingir seus objetivos e superar seu genial rival e amigo de infância, Yuno?!!',
         genre: [
           "Ação", 'Aventura', 'Fantasia', 'Magia', 'Shounen'
         ],
         autor: [{name: 'Tabata, Yuuki', url:''}],
         scans: [{ name: 'scansPROJECT', url: ''}],
         editora: [{name: 'Panini', url: 'https://loja.panini.com.br/panini/solucoes/Busca.aspx?fcp=29009'}],
         image: 'https://static3.mangalivre.com/capas/XzJfT6TjJArZeQjuoWyWSA/1751/external_cover.jpg',
         chapter: [
           {
             id: 1,
             date: '02/08/19',
             title: 'Yunoo!!',
             number: 1             
           },
           {
            id: 2,
            date: '29/07/19',
            title: 'Yunoo eu te amo!!',
            number: 2             
          }
         ]      
       }
      ]
  }

  
  render() {
    return (
      <Main>
        <MDBRow>
          <MDBCol lg='3' md='12'>
            <div>
              <MDBCard className={css(styles.card)}>
                    <MDBCardImage className="img-fluid" src={this.state.manga[0].image} waves />
              </MDBCard>
            </div>
          </MDBCol>

          <MDBCol lg='9' md='12'>
            
            <div>
              <div>
                <h4 className={css(styles.mangaTitle)}> {this.state.manga[0].title}</h4>
              </div>  
              <div className={(styles.mangaAuthor)}>
                 <h6 ><b>Autor: </b> 
                 {
                     this.state.manga[0].autor?.map((x,y)=> {
                     return (<a className={css(styles.mangaScan)} href={x.url} target='_blank' > {x.name}</a>)
                     })
                    // <a>Traduzido por: {}</a>
                  }                 
                </h6>  
              </div>  

              <div className='mt-3'>
                <h6  style={{fontWeight: 400}} > Traduzido por:    
                  {
                     this.state.manga[0].scans?.map((x,y)=> {
                     return (<a className={css(styles.mangaScan)} href={x.url} target='_blank' >{x.name}</a>)
                     })
                    // <a>Traduzido por: {}</a>
                  }
                </h6>
              </div>

              <div className='mt-3'>
                <h6  style={{fontWeight: 400}} > Editora:  
                  {
                     this.state.manga[0].editora?.map((x,y)=> {
                     return (<a className={css(styles.mangaScan)} href={x.url} target='_blank' > {x.name}</a>)
                     })
                    // <a>Traduzido por: {}</a>
                  }
                </h6>
              </div> 

              <div className='mt-3'>
              {
                this.state.manga[0].genre?.map((x,y) =>{
                return <span className={css(styles.genre)} key={ `${y}g` }>{x} </span>
                })
              }
              </div>
             <p className={css(styles.mangaDescription)} > {this.state.manga[0].description}</p>
            </div>
          </MDBCol>
        </MDBRow> 

        {/* <MDBRow> */}
          <MDBCard>
            <div className={`mb-3 ${css(styles.countChapter)}`}>{this.state.manga[0].chapter.length} Capítulo{this.state.manga[0].chapter.length > 1 ? 's' : ''}</div>
             {
               this.state.manga[0].chapter.map((x,y)=>{
                 return (
                  <MDBRow key={`${y}cc`} className='align-middle mt-2 mb-2'>
                  <MDBCol md='9' className='align-middle' >
                    <div className={css(styles.chapterList)} >
                      <div className={css(styles.chapterDate)}>
                       {x.date}
                      </div>
                      <div className='ml-4 mt-1'>
                        <h6 className={css(styles.chapterNumber)}>Capítulo Nº: {x.number}</h6>
                      </div>
                      <div className='ml-4 mt-1'>
                        <h6 className={css(styles.chapterTitle)}>{x.title}</h6>
                      </div> 
                                    
                    </div>                   
                  </MDBCol> 
                  <MDBCol md='3' className='align-middle'>
                    <div className='text-right'>
                      <a className='chaptherView'><MDBIcon icon='eye' size='1x' /></a>
                    </div>
                  </MDBCol>
                  </MDBRow>
                 )
               })
             }
          </MDBCard>
        

      </Main>
    )
  }
}
