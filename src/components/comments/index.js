import React, { Component } from 'react'
import { MMInputArea, MMInput } from '../formulario/index'
import { MMButton } from '../../components/buttons'
import { MDBCard, MDBCardHeader, MDBIcon, MDBCardBody, MDBCardFooter } from 'mdbreact'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'

const style = StyleSheet.create({
  autorPosting: {
    marginBottom: 0,
    fontSize: 15,
    fontWeight: '700',
    color: 'rgb(62, 69, 81)',
  },
  autorReplayPosting: {
    marginBottom: 0,
    fontSize: 15,
    fontWeight: '700',
    color: 'rgb(62, 69, 81)',
  },
  datingPosting: {
    fontSize: 12,
    color: '#757575',
    fontWeight: 'initial'
  },
  datingReplayPosting: {
    fontSize: 12,
    color: '#757575',
    fontWeight: 'initial'
  },
  autorReplayPosting: {
    fontSize: 12,
    color: '#757575'
  },
  flagReportPosting: {
    color: '#e0e0e0',
    cursor: 'pointer',
    ':hover': {
      color: '#757575'
    }
  },
  textReplayPosting: {
    fontSize: 15,
    wordBreak: 'break-word',
    marginTop: 10,
    marginBotton: 10
  },
  reportFlag: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  autorPostingText: {
    fontSize: 15,
    wordBreak: 'break-word',
    marginTop: 10,
    marginBotton: 10
  },
  postingSharedText: {
    fontSize: 13,
    color: '#757575',
  },
  socialBtn: {
    // z-index: 1;  
    padding: 0,
    marginLeft: 10,
    overflow: 'hidden',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: 2,
    color: '#fff',
    width: 30,
    height: 30,
    boxShadow: '0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15)',
  },
  btnFacebook: {
    backgroundColor: '#3b5998'
  },
  btnTwitter: {
    backgroundColor: '#5bc3ee',
  },
  btnTumble: {
    backgroundColor: '#2c4762',
  },
  textSpoiler: {
    backgroundColor: 'rgb(75, 81, 93)',
    color: 'rgb(75, 81, 93)',
    ':hover': {
      color: '#fff'
    },    
  },
  imgSpoiler: {   
    // position: 'relative', 
    // '::before':{
      position: 'absolute',
      background: 'rgb(75, 81, 93)',
      content: "' '",
      top: 0, 
      bottom: 0,
      left: 0,
      right: 0,
    // }
    // zIndex: 1
  },
  btnSpoilerImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '20%'    
    
  },
  btnSpoiler: {
    // z-index: 1;  
    padding: 0,
    border: '4px solid #f57600',
    backgroundColor: '#d32f2f',
    // backgroundColor: 'rgba(0,0,0,0.18)',
    textTransform: 'uppercase',
    fontWeight: 700,
    // marginLeft: 10,
    overflow: 'hidden',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderRadius: '50%',
    textAlign: 'center',
    color: '#fff',
    lineHeight: 2,   
    width: '5em',
    height: '5em',
    boxShadow: '0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15)',
    ':hover':{
      backgroundColor: 'rgba(211, 47, 47, 0.6)',
      transitionDuration: '300ms',      
    }
  },
})

class MMComments extends Component {
  state = {
    comment: '',
    commentReplay: '',
    comments: [
      {
        id_show: 1,
        id: 84394,
        parent: [],
        date: '02/02/2018',
        u_avatar: 'https://cdn130.picsart.com/292599068047201.jpg',
        u_name: 'Anna-Senpai',
        comment: {
          spoiler: false,
          text: 'Gostei bastante dessa porra. Ai que delicia frango frango frango delicia frango frango frango delicia frango frango frango delicia frango frango frango delicia frango frango frango ',
          image: 'https://i.giphy.com/media/xT9Igl6lJIXYWLmqBy/giphy.webp'
        }
      },
      {
        id_show: 1,
        id: 84395,
        parent: [84394],
        date: '05/02/2018',
        u_avatar: 'https://pm1.narvii.com/6840/0f06f9dcb00b3e8fa747988163db299e9213f569v2_128.jpg',
        u_name: 'Okuma Tanukichi',
        comment: {
          spoiler: false,
          text: 'Gostei bastante dessa porra. Ai que delicia corno corno corno corno corno corno corno corno corno corno corno corno corno corno corno corno corno corno corno corno',
          image: 'https://i.giphy.com/media/xT9Igl6lJIXYWLmqBy/giphy.webp'
        }
      },
      //  Comment 02
      {
        id_show: 1,
        id: 84396,
        parent: [],
        date: '02/02/2018',
        u_avatar: 'https://cdn130.picsart.com/292599068047201.jpg',
        u_name: 'Anna-Senpai',
        comment: {
          spoiler: true,
          text: 'Gostei bastante dessa porra. Ai que delicia frango frango frango delicia frango frango frango delicia frango frango frango delicia frango frango frango frango frango delicia frango frango frango delicia frango frango frango delicia frango frango',
          image: 'https://i.giphy.com/media/xT9Igl6lJIXYWLmqBy/giphy.webp'
        }
      },
    ]
  }

  listInput = event => {   
    const { name, value } = event.target
    this.setState({
      [name]: value
    })      
  }

  removeSpoiler(id, key){
    let postnumber = this.state.comments.find((f)=> f.id === id)

    let items = [...this.state.comments];
    let item = {...items[key]}
    item.comment.spoiler = false;
    items[key] = item;
    this.setState({comments: items});    
  }

  addcommentReplay(e ,idComentario){
    if (e.key === "Enter"){ //pega o evento de clicar com o Enter
      if(this.state.commentReplay !== ''){
        let newitem = {
          id_show: 1, //id da série
          id: parseInt(Math.random() * (10000 - 1) + 1), //pra gerar um id por enquanto
          parent: [idComentario], //Tem que fazer a funcção de curtidas tbm 
          date: moment().format('DD/MM/YYYY'),
          u_avatar: 'https://cdn65.picsart.com/199770357003202.gif',
          u_name: 'Assada San',
          comment: {
            spoiler: false,
            text: this.state.commentReplay
        }
      }
      this.setState(prevState => ({
        comments: [...prevState.comments, newitem],
        commentReplay: '',
      }))
      }      
  }
}

  commentsRender() {  

    let { comments } = this.state;

    return comments.map((x, y) => {
      if (x.parent.length === 0) {
        let replays = comments.filter((f) => f.parent[0] === x.id)

        return (
          <>
            <div key={`${y}first`} className={'mx-auto mb-4'} style={{ width: 700, border: '#f57600' }}>
              <MDBCard news >
                <MDBCardHeader style={{ flexDirection: 'row', display: 'flex' }} >
                  <img src={x.u_avatar} className="rounded" width={40} height={40} alt="" />
                  <div className='ml-3'>
                    <h6 className={css(style.autorPosting)}>{x.u_name}</h6>
                    <h6 className={css(style.datingPosting)}>{x.date}</h6>
                  </div>
                  <div onClick={() => { alert('Reportado!!!') }} className={css(style.reportFlag)} >
                    <MDBIcon fas icon='flag' className={css(style.flagReportPosting)} />
                  </div>
                </MDBCardHeader>
                <MDBCardBody>
                  {x.comment.text !== null ? <p className={`${css(style.autorPostingText)} 
          ${ x.comment.spoiler ? css(style.textSpoiler) : ''} `}> {x.comment.text}</p> : ''}

                  {x.comment.image !== null ?
                    <div style={{position: 'relative'}}><img src={x.comment.image} alt='' width={'100%'} className='img-fluid' />
                     {x.comment.spoiler ? <div className={` aaaa ${css(style.imgSpoiler)}`} >
                       <div className={css(style.btnSpoilerImage)} >
                         <button className={css(style.btnSpoiler)} onClick={()=> {this.removeSpoiler(x.id, y)}} >Spoiler</button >
                       </div>
                     </div> : ''}
                    </div>
                    : ''}

                </MDBCardBody>
                < MDBCardFooter style={{ flexDirection: 'row', display: 'flex', position: 'relative' }}>
                  <div>
                    <span className={`${css(style.postingSharedText)} mr-5`}><MDBIcon icon='reply' fas /> {replays.length} Respostas</span>
                    <span className={css(style.postingSharedText)}><MDBIcon icon='heart' fas /> 8</span>

                  </div>
                  <div style={{ display: 'flex', position: 'absolute', verticalAlign: 'middle', float: 'right', right: 0, marginRight: 10 }} >
                    <h1 className={css(style.postingSharedText)}>Compartilhar: </h1>
                    <span>
                      <a onClick={() => { alert('Compartilhando...') }}
                        className={`${css(style.socialBtn)} ${css(style.btnFacebook)} waves-effect waves-light`}><MDBIcon fab icon='facebook-f' /></a>
                      <a onClick={() => { alert('Compartilhando...') }}
                        className={`${css(style.socialBtn)} ${css(style.btnTwitter)} waves-effect waves-light`}><MDBIcon fab icon='twitter' /></a>
                      <a onClick={() => { alert('Compartilhando...') }}
                        className={`${css(style.socialBtn)} ${css(style.btnTumble)} waves-effect waves-light`}><MDBIcon fab icon='tumblr' /></a>
                    </span>
                  </div>

                </MDBCardFooter>
                <MDBCardHeader >
                  <MMInput value={this.state.commentReplay} onKeyDown={(e) => {this.addcommentReplay(e, x.id)}} onChange={this.listInput} name='commentReplay' />

                  {replays.map((i, j) => {

                    return (
                  <div key={`${j}replay`} style={{ flexDirection: 'row', display: 'flex' }} >
                    <img src={i.u_avatar} className="rounded" width={40} height={40} alt="" />
                    <div className='ml-3'>
                      <h6 className={css(style.autorPosting)}>{i.u_name} <span className={css(style.datingReplayPosting)}>{i.date}</span></h6>
                    <h6 className={`${css(style.textReplayPosting)} ${i.comment.spoiler ? css(style.textSpoiler) : ''}`}>{i.comment.text}</h6>
                    </div>
                    <div className={css(style.reportFlag)} >
                      <MDBIcon onClick={() => { alert('Deletado!!!') }} fas icon='times' className={`${css(style.flagReportPosting)} mr-5`} />
                      <MDBIcon fas icon='flag' onClick={() => { alert('Reportado!!!') }} className={css(style.flagReportPosting)} />
                    </div>
                  </div>
                    )

                  })}

                  
                </MDBCardHeader>
              </MDBCard>
            </div>
          </>

        )

      }

    })

    //  return (
    //    <>
    //    <div className={'mx-auto mb-4'} style={{width: 700, border: '#f57600' }}>
    //    <MDBCard news >
    //      <MDBCardHeader style={{flexDirection: 'row', display: 'flex'}} >
    //         <img src='https://cdn130.picsart.com/292599068047201.jpg' class="rounded" width={40} height={40} alt="" />
    //         <div className='ml-3'>   
    //         <h6 className={css(style.autorPosting)}>Anna-Senpai</h6>
    //         <h6 className={css(style.datingPosting)}>02/02/2055</h6>    
    //         </div>   
    //         <div onClick={()=>  {alert('Reportado!!!')}} className={css(style.reportFlag)} >
    //           <MDBIcon fas icon='flag' className={css(style.flagReportPosting)} />
    //         </div>
    //      </MDBCardHeader>
    //      <MDBCardBody>
    //         <p className={css(style.autorPostingText)}> O mangá é bom, pena que o ASTA é chato pra caralho. TM. Ta faltando o nectar do amor!!!      </p>
    //         <img src='https://i.giphy.com/media/xT9Igl6lJIXYWLmqBy/giphy.webp' width={'100%'} class='img-fluid' />            
    //      </MDBCardBody>
    //      < MDBCardFooter style={{flexDirection: 'row', display: 'flex', position: 'relative'}}>
    //         <div>
    //           <span className={`${css(style.postingSharedText)} mr-5` }><MDBIcon icon='reply' fas />15 Respostas</span>
    //           <span className={css(style.postingSharedText)}><MDBIcon icon='heart' fas /> 8</span>

    //         </div> 
    //      <div style={{display: 'flex', position: 'absolute', verticalAlign: 'middle', float:'right', right: 0, marginRight: 10}} >
    //        <h1 className={css(style.postingSharedText)}>Compartilhar: </h1>
    //        <span>
    //          <a onClick={()=> {alert('Compartilhando...')}}
    //         className={`${css(style.socialBtn)} ${css(style.btnFacebook)} waves-effect waves-light`}><MDBIcon fab icon='facebook-f'/></a>
    //          <a onClick={()=> {alert('Compartilhando...')}}
    //         className={`${css(style.socialBtn)} ${css(style.btnTwitter)} waves-effect waves-light`}><MDBIcon fab icon='twitter'/></a> 
    //         <a onClick={()=> {alert('Compartilhando...')}}
    //         className={`${css(style.socialBtn)} ${css(style.btnTumble)} waves-effect waves-light`}><MDBIcon fab icon='tumblr'/></a>
    //         </span>
    //      </div>        

    //      </MDBCardFooter>
    //      <MDBCardHeader >
    //        <MMInput onChange={()=> console.log('')} name='replay'  />
    //        <div style={{flexDirection: 'row', display: 'flex'}} >
    //         <img src='https://pm1.narvii.com/6840/0f06f9dcb00b3e8fa747988163db299e9213f569v2_128.jpg' class="rounded" width={40} height={40} alt="" />
    //         <div className='ml-3'>   
    //         <h6 className={css(style.autorPosting)}>Okuma Tanukichi <span className={css(style.datingReplayPosting)}>02/02/2012</span></h6>
    //         <h6 className={css(style.textReplayPosting)}>Com isso eu devo concordar,MAS PARA DE PERSEGUIR</h6>    
    //         </div>
    //         <div className={css(style.reportFlag)} >
    //           <MDBIcon onClick={()=>  {alert('Deletado!!!')}}  fas icon='times' className={`${css(style.flagReportPosting)} mr-5` } />
    //           <MDBIcon fas icon='flag' onClick={()=>  {alert('Reportado!!!')}} className={css(style.flagReportPosting)} />
    //         </div>   

    //      </div>
    //      </MDBCardHeader>   
    //    </MDBCard>  
    //    </div>
    //    </>
    //  )
  }
  render() {
    return (
      <>
        <form>
          <MMInputArea name='comment' placeholder={'Em que loli, você está pensando?!'} value={this.state.comment} onChange={this.listInput} />
          <div style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <MMButton onClick={() => alert(this.state.comment)} title='Spoiller' />
            <MMButton onClick={() => alert(this.state.comment)} title='Postar' />
          </div>
        </form>
        {this.commentsRender()}
      </>



    )
  }
}

export { MMComments }