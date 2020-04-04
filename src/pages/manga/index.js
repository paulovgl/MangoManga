import React, { Component } from 'react'
import {Main} from '../../components/main'
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBIcon, MDBCardBody} from 'mdbreact'
import './manga.scss'
import { StyleSheet, css } from 'aphrodite';
import MMRating from '../../components/rating'
import moment from 'moment';

const styles = StyleSheet.create({

  mangaAuthor: {
    paddingBotton: 500
  },  
  card: {
    width: 250,
    height: 367,
    borderRadius: 6,
    position: 'relative',
    marginBottom: '1em'
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
    marginTop: 5,   
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
  },
  status: {
    // backgroundColor: '#29ab87',
    color: '#fff',
    borderRadius: 7,
    fontWeight: '500',
    padding: '0.3em',
    marginLeft: 2,
    // marginRight: 2,  
  },
  mangaButton: {  
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 600,
    color: '#FFF'
  },
  mangaAdd: {
    backgroundColor: 'rgb(230, 74, 25)',
    transitionDuration: '200ms',
    ':hover':{
      backgroundColor: 'rgba(230, 74, 25, 0.6)',
      transitionDuration: '200ms',
    }
  },
  mangaRemove: {
    backgroundColor: 'rgba(62, 69, 81, 1)',
    transitionDuration: '200ms',
    ':hover':{
      backgroundColor: 'rgba(62, 69, 81, 0.6)',
      transitionDuration: '200ms',
    }
  },
  chapterNew: {
    marginRight: 8,
    color: '#fff',
    fontSize: 13,
    backgroundColor: 'rgb(230, 74, 25)',
    borderRadius: 7,
    padding: '0.3em',
    fontWeight: '500',
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
         status: 'Ativo',
         rating: 3,         
         chapter: [
           {
             id: 1,
             date: '02/08/19',
             title: 'Yunoo!!',
             number: 1             
           },
           {
            id: 2,
            date: '04/04/2020',
            title: 'Yunoo eu te amo!!',
            number: 2             
          }
         ]      
       },
      //  {
      //   id: 2,
      //   title: 'Dangeon Reset',
      //   description: '[A Dungeon está resetando.] Quando a Dungeon é completamente explorada e suas armadilhas são ativadas, ela é resetada automaticamente para os próximos ‘jogadores’. Mas esses resets não funcionam em mim?! A única existência na dungeon que se tornou livre dos resets eternos da dungeon.',
      //   genre: [
      //     "Ação", 'Aventura', 'Fantasia'
      //   ],
      //   autor: [{name: 'Daul', url:''}],
      //   scans: [{ name: 'NeoxScan', url: ''}],
      //   editora: [{name: 'Ant Studio', url: ''}],
      //   image: 'https://neoxscan.com/newsite/wp-content/uploads/2020/01/Dungeon-Reset-193x278.jpg',
      //   status: 'Ativo',
      //   rating: 4,         
      //   chapter: [
      //     {
      //       id: 1,
      //       date: '02/08/2019',
      //       title: 'Eu estou vivo?!',
      //       number: 1             
      //     },
      //     {
      //      id: 2,
      //      date: '04/04/2020',
      //      title: 'Resetando',
      //      number: 2             
      //    }
      //   ]      
      // }
      ],
      add: false,
  }

  addManga(){
    this.setState({add: !this.state.add})  
  }

  showNew(data){
    let today = moment().startOf('day');
    console.log(today)
    data = moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD');    
    const dias = moment.duration(today.diff(data)).asDays();   
    if(dias < 5) return (<span className={css(styles.chapterNew)}>Novo</span>)   
  }

  
  render() {
    return (
      <Main>
        <MDBRow>
          <MDBCol lg='3' md='12'>
            <div>
              <MDBCard className={css(styles.card)} onClick={()=>{this.addManga()}}>
                    <MDBCardImage className="img-fluid" src={this.state.manga[0].image} waves />
                    <MDBCardBody waves onClick={()=>{this.addManga()}} 
                        className={`
                          ${css(styles.mangaButton)} 
                          ${this.state.add ? css(styles.mangaRemove) : css(styles.mangaAdd) }
                        `}>
                          {this.state.add ? 'Remover' : 'Adicionar'}
                          
                    </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>

          <MDBCol lg='9' md='12'>

              <MMRating initialRating={this.state.manga[0].rating} />
            
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

              <div className='mt-3'>
                <h6 style={{fontWeight: 400}}>
                  Status: <span className={`${css(styles.status)} success-color`}>{this.state.manga[0].status}</span>
                </h6>
                 
              </div>

             <p className={`${css(styles.mangaDescription)} pt-0`} > {this.state.manga[0].description}</p>
            </div>
          </MDBCol>
        </MDBRow> 

        {/* <MDBRow> */}
          <MDBCard className='mb-2'>
            <div className={` ${css(styles.countChapter)}`}>{this.state.manga[0].chapter.length} Capítulo{this.state.manga[0].chapter.length > 1 ? 's' : ''}</div>
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
                      {this.showNew(x.date)}
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
