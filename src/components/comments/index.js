import React, { Component } from 'react'
import { MMInput, MMInputWithButton } from '../formulario/index'
import { MMButton } from '../../components/buttons'
import { MDBCard, MDBCardHeader, MDBIcon, MDBCardBody, MDBCardFooter } from 'mdbreact'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'
import Api from '../../core/api'
import { MMTheme } from '../theme'
import imgdef from '../../images/Avatar.webp'
import PopUp from '../notifications';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './comments.scss'
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import connection from '../../core/utils/websocket';
import { connect } from 'react-redux'


let subscription;

const style = (theme) => StyleSheet.create({
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
    fontSize: 13,
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
    ':hover': {
      backgroundColor: 'rgba(211, 47, 47, 0.6)',
      transitionDuration: '300ms',
    }
  },
  chapterTitle: {
    fontSize: 16,
    color: theme.manga.chapter.title.color,
    fontWeight: '500'
  },

  custom_ui: {
    backgroundColor: theme.cards.confirm.background,
    color: theme.cards.confirm.color,
    borderRadius: 6,
    padding: 20
  },
  custom_ui_title: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: theme.manga.chapter.title.color,
    fontWeight: '500',
    textAlign: 'center'
  },
  custom_ui_message: {
    fontSize: 13,
    textTransform: 'uppercase',
    // color: theme.manga.chapter.title.color,
    // fontWeight: '500',
    textAlign: 'center'
  }
})

class MMComments extends Component {

  static contextType = MMTheme

  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      spoiler: false,
      image: null,
      commentReplay: '',
      comments: [

      ]
    }
    this.handleFileChange = this.handleFileChange.bind(this);
  }


  componentDidMount() {
    connection.connect();
    subscription = connection.subscribe(`posts`, { post: this.handleMessageAdd, like: this.handleLikesAdd, comment: this.handleCommentsAdd, likecomment: this.handleLikesCommentsAdd, deletecomment: this.handleDeleteComment });
    this.getData();
  }

  handleMessageAdd = message => {
    let { id, data } = message;
    id = parseInt(id)
    if (id === this.props.mangaId) {
      this.setState(prevState => ({
        comments: [data, ...prevState.comments], comment: ''
      }));
    }
  };

  handleLikesAdd = async (message) => {
    let { likes, id } = message
    let a = await this.state.comments.slice();
    let idx = await a.findIndex(item => item.id === parseInt(id))
    if (idx !== -1) {
      a[idx].__meta__.likes_count = likes;
      this.setState({ comments: a });
    }
  }

  handleLikesCommentsAdd = async (message) => {
    let { likes, post_id, comment_id } = message
    let a = await this.state.comments.slice();
    let idx = await a.findIndex(item => item.id === parseInt(post_id))
    if (idx !== -1) {
      let idy = await a[idx].comments.findIndex(item => item.id === parseInt(comment_id))
      a[idx].comments[idy].__meta__.likes_count = likes
      this.setState({ comments: a })
    }
  }


  handleCommentsAdd = async (message) => {
    let { id, data } = message
    let a = await this.state.comments.slice();
    let idx = await a.findIndex(item => item.id === parseInt(id))
    if (idx !== -1) {
      let comments = await a[idx].comments
      await comments.push(data)
      this.setState({ comments: a })
    }
  }

  handleSpoiler(e) {
    this.setState({ spoiler: !this.state.spoiler })
  }

  handleDeleteComment = async (message) => {
    let { id, data } = message
    let a = await this.state.comments.slice();
    let idx = await a.findIndex(item => item.id === parseInt(id))
    if (idx !== -1) {
      a[idx].comments = data
      this.setState({ comments: a })
    }
  }

  async getData() {
    Api.getPosts(this.props.mangaId).then(
      res => {
        if (res.status && res.status === 'success') {
          this.setState({ comments: res.data.data })
        }
      }
    )
  }

  deleteComment(id, theme) {
    if (this.props.roles.administrador) {
      return <MDBIcon onClick={() => this.inputDeleteComment(id.id, id.post_id)} fas icon='times' className={`${css(style(theme).flagReportPosting)} mr-3`} />
    }
    else {
      if (id.user.username === this.props.auth.username) {
        return <MDBIcon onClick={() => { this.inputDeleteComment(id.id, id.post_id) }} fas icon='times' className={`${css(style(theme).flagReportPosting)} mr-3`} />
      }
    }
  }

  inputDeleteComment(id_comment, id_post) {
    let theme = this.context;
    confirmAlert({

      customUI: ({ onClose }) => {
        return (
          <div className={`${css(style(theme).custom_ui)}`}>
            <h1 className={`${css(style(theme).custom_ui_title)}`} >Você tem certeza que deseja deletar?</h1>
            <p className={`${css(style(theme).custom_ui_message)}`}>A operação é irreversível</p>
            <center>
            <MMButton title='Sim' onClick={() => {
                send(id_comment, id_post);
                onClose();
              }} />
              <MMButton title='Não' onClick={onClose} />  
            </center>

          </div>
        );
      }
    });

    const send = (id_comment, id_post) => {
      Api.deleteComment(id_post, id_comment).then(res => {
        if (res.status === 'success') {
          PopUp.showMessage('success', res.data.message)
        }
        else if (res.status === 'error') {
          res.content.map((x, y) => {
            PopUp.showMessage('error', x.message)
          })
        }
      })
    }


  }

  submitLikes = (event, id) => {
    Api.createLike(id).then(res => {
      if (res.status !== undefined && res.status === 'error') {
        res.content.map((x, y) => {
          PopUp.showMessage('error', x.message)
        })
      }
    })
  }

  submitLikeComment = (event, post_id, comment_id) => {
    Api.createLikeComment(post_id, comment_id).then(res => {
      if (res.status !== undefined && res.status === 'error') {
        res.content.map((x, y) => {
          PopUp.showMessage('error', x.message)
        })
      }
    })
  }


  submitInput = (event, id) => {
    const { comment, spoiler, image } = this.state
    let data = {
      content: comment,
      spoiler: spoiler,
      image: image
    }
    Api.createPost(id, data).then(res => {
      if (res.status !== undefined && res.status === 'success') {
        PopUp.showMessage('success', res.data.message)
        this.setState({ comment: '', image: null })
      }
      else {
        PopUp.showMessage('error', 'Houve um problema com sua solicitação!!')
      }
    })
  }

  listInput = event => {
    const { name, value } = event.target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  handleFileChange(event) {
    const { name, files } = event.target
    console.log(name, files)
    let reader = new FileReader();
    let file = files[0];
    reader.onload = () => {
      this.setState({ [name]: reader.result });
    }
    reader.readAsDataURL(file);
  }

  removeSpoiler(id, key) {
    // let postnumber = this.state.comments.find((f) => f.id === id)

    let items = [...this.state.comments];
    let item = { ...items[key] }
    item.spoiler = false;
    items[key] = item;
    this.setState({ comments: items });
  }

  submitReplay(e, id) {
    const { name, value } = e.target
    if (e.key === "Enter") { //pega o evento de clicar com o Enter         
      if (this.state[name] !== '') {
        let data = {
          content: this.state[name]
        }
        Api.createComment(id, data).then(res => {
          if (res.status !== undefined && res.status === 'success') {
            PopUp.showMessage('success', res.data.message)
            this.setState({ [name]: '' })
          }
          else {
            PopUp.showMessage('error', 'Houve um problema com sua solicitação!!')
          }
        })
      }
    }
  }

  renderDateFormat(date) {
    return moment(date, 'YYYY-MM-DD HH:mm').format('DD-MM-YYYY HH:mm')

  }

  commentsRender(theme) {

    let { comments } = this.state;

    if (comments.length > 0) {

      return comments.map((x, y) => {
        // if (x.parent.length === 0) {
        let replays = x.comments.length

        return (
          <div key={`${y}first`} className={'mx-auto mb-4'} style={{ width: 700, border: '#f57600' }}>
            <MDBCard news >
              <MDBCardHeader style={{ flexDirection: 'row', display: 'flex' }} >
                <img src={x.user.avatar !== null ? `data:image/png;base64,${x.user.avatar}` : imgdef} className="rounded" width={40} height={40} alt="" />
                <div className='ml-3'>
                  <h6 className={css(style(theme).autorPosting)}>{x.user.username}</h6>
                  <h6 className={css(style(theme).datingPosting)}>{this.renderDateFormat(x.created_at)}</h6>
                </div>
                <div onClick={() => { alert('Reportado!!!') }} className={css(style(theme).reportFlag)} >
                  <MDBIcon fas icon='flag' className={css(style(theme).flagReportPosting)} />
                </div>
              </MDBCardHeader>
              <MDBCardBody>
                {x.content !== null ? <p className={`${css(style(theme).autorPostingText)} 
          ${ x.spoiler ? css(style(theme).textSpoiler) : ''} `}> {x.content}</p> : ''}

                {x.image !== null ?
                  <div style={{ position: 'relative' }}><img src={`data:image/webp;base64,${x.image}`} alt='' width={'100%'} className='img-fluid' />
                    {x.spoiler ? <div className={` aaaa ${css(style(theme).imgSpoiler)}`} >
                      <div className={css(style(theme).btnSpoilerImage)} >
                        <button className={css(style(theme).btnSpoiler)} onClick={() => { this.removeSpoiler(x.id, y) }} >Spoiler</button >
                      </div>
                    </div> : ''}
                  </div>
                  : ''}

              </MDBCardBody>
              < MDBCardFooter style={{ flexDirection: 'row', display: 'flex', position: 'relative' }}>
                <div>
                  <span className={`${css(style(theme).postingSharedText)} mr-5`}><MDBIcon icon='reply' fas />  {replays} Respostas</span>
                  <span className={css(style(theme).postingSharedText)}><a onClick={(e) => this.submitLikes(e, x.id)}><MDBIcon icon='heart' fas /></a> {x.__meta__.likes_count}</span>

                </div>
                <div style={{ display: 'flex', position: 'absolute', verticalAlign: 'middle', float: 'right', right: 0, marginRight: 10 }} >
                  <h1 className={css(style(theme).postingSharedText)}>Compartilhar: </h1>
                  <span>
                    <a onClick={() => { alert('Compartilhando...') }}
                      className={`${css(style(theme).socialBtn)} ${css(style(theme).btnFacebook)} waves-effect waves-light`}><MDBIcon fab icon='facebook-f' /></a>
                    <a onClick={() => { alert('Compartilhando...') }}
                      className={`${css(style(theme).socialBtn)} ${css(style(theme).btnTwitter)} waves-effect waves-light`}><MDBIcon fab icon='twitter' /></a>
                    <a onClick={() => { alert('Compartilhando...') }}
                      className={`${css(style(theme).socialBtn)} ${css(style(theme).btnTumble)} waves-effect waves-light`}><MDBIcon fab icon='tumblr' /></a>
                  </span>
                </div>

              </MDBCardFooter>
              <MDBCardHeader >
                <MMInput value={this.state[`commentReplay${y}`]} onKeyDown={(e) => { this.submitReplay(e, x.id) }} onChange={this.listInput} name={`commentReplay${y}`} />

                {x.comments.map((i, j) => {

                  return (
                    <div key={`${j}replay`} style={{ flexDirection: 'row', display: 'flex' }} >
                      <img src={i.user.avatar !== null ? `data:image/png;base64,${i.user.avatar}` : imgdef} className="rounded" width={40} height={40} alt="" />
                      <div className='ml-3'>
                        <h6 className={css(style(theme).autorPosting)}>{i.user.username} <span className={css(style(theme).datingReplayPosting)}>{this.renderDateFormat(i.created_at)}</span></h6>
                        <h6 className={`${css(style(theme).textReplayPosting)} ${i.spoiler ? css(style(theme).textSpoiler) : ''} `}>{i.content}</h6>
                      </div>
                      <div className={css(style(theme).reportFlag)} >
                        {this.deleteComment(i, theme)}
                        <a className={`${css(style(theme).flagReportPosting)} mr-3 ${css(style(theme).postingSharedText)}`} onClick={(e) => this.submitLikeComment(e, x.id, i.id)}><MDBIcon icon='heart' fas /> {i.__meta__.likes_count}</a>

                        <MDBIcon fas icon='flag' onClick={() => { alert('Reportado!!!') }} className={css(style(theme).flagReportPosting)} />
                      </div>
                    </div>
                  )

                })}


              </MDBCardHeader>
            </MDBCard>
          </div>
        )

        // }

      })

    }

    else {
      return <center><h6 className={`${css(style(theme).chapterTitle)} mt-2`}>SEM COMENTÁRIOS NO MOMENTO!!</h6></center>
    }


  }
  render() {
    let theme = this.context
    return (
      <>
        <form>
          <div>
            <MMInputWithButton
              label={this.state.spoiler === true ? 'Spoiler' : null}
              name='comment'
              placeholder={'Em que loli, você está pensando?!'}
              value={this.state.comment}
              onChange={this.listInput}
              imageName='image'
              imageValue={this.state.image}
              id='img-UP'
              remove={() => this.setState({ image: null })}
              onChangeImage={this.handleFileChange}
              accept='image/png, image/jpeg, image/webp, image/gif'
            />
          </div>
          <div style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <MMButton onClick={(e) => this.handleSpoiler(e)} title='Spoiler' />
            <MMButton onClick={(e) => this.submitInput(e, this.props.mangaId)} title='Postar' />
          </div>
        </form>
        {this.commentsRender(theme)}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.user,
    roles: state.roles.roles
  }
}
export default connect(mapStateToProps)(MMComments) 