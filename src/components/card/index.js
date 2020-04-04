import React, {Component} from 'react';
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardHeader} from 'mdbreact'
import {withRouter} from 'react-router'
import {MMTheme} from '../theme'
import {StyleSheet, css} from 'aphrodite';




const styles = (theme) => StyleSheet.create({
  cardView:{
    backgroundColor: theme.cards.default.body.background,
    color: theme.cards.default.body.color,
  },
  card:{
    width: 170,
    height: 250,
    borderRadius: 6,
    position: 'relative',
    marginBottom: '0.5em'
  },
  cardBody:{
    backgroundColor: '#e64a19',
    padding: '0.7rem',
    overflow: 'hidden',
    textAlign: 'center',
    whiteSpace: 'normal'
  },
  
  cardTitle: {
    fontWeight: 700,
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'normal'
  },
  chapter: {
    position: 'absolute',
    zIndex: 999,
    padding: 5,   
    backgroundColor: '#2E2E2E'  
  },
  chapterNumber: {
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 0,
    borderBottomRightRadius: 20
  }

 
}
)

class MMCard extends Component {
  static contextType = MMTheme
  render(){   
    let theme = this.context;
    return (
      <>
      <MDBCard className={css(styles(theme).card)} onClick={() => this.props.history.push(`/manga/${this.props.id}/show`) }>    
       <div className={css(styles(theme).chapter)}>
        <h6 className={css(styles(theme).chapterNumber)}>{`# ${this.props.chapter}`}</h6>
       </div>
      <MDBCardImage  className="img-fluid" src={this.props.image} waves />
      <MDBCardBody className={css(styles(theme).cardBody)}>
       <h6 className={css(styles(theme).cardTitle)}>{this.props.title}</h6>       
      </MDBCardBody> 
      
      </MDBCard>
      </>
  )
  }  
}

const MMCardTitle = props => {
  if (props.name) {
    return (
      <MDBCardHeader text={props.theme.cards.default.header.background} color={
        props.theme.cards.default.header.color
      } style={{fontWeight: 'bold', fontSize: 17}}>
        {props.name}
      </MDBCardHeader>
    )
  }
  else {
    return true
  }
}


class MMCardView extends Component {
  static contextType = MMTheme
  render(){
    let theme = this.context;
    let {title, color, children, container, margin} = this.props 
    return (     
      <div style={{paddingTop: this.props.padding ? this.props.padding : 20}} className={`${[container ? 'container ' : ' ',  margin  ? ' '+margin : ' ']} mb-2`}>
      <MDBCard className={css(styles(theme).cardView) }>       
        <MMCardTitle theme={theme} name={title} color={color}/>   
        <MDBCardBody  className={css(styles(theme).cardView)}> 
            {children}
        </MDBCardBody>
      </MDBCard> 
      </div>    
    );
  }
  }


MMCard = withRouter(MMCard);
export {MMCard, MMCardView}