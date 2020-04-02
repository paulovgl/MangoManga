import React, {Component} from 'react';
import {MDBCard, MDBCardImage, MDBCardBody, SWSCardTitle, MDBCardHeader} from 'mdbreact'
import {withRouter} from 'react-router'

class MMCard extends Component {

  render(){   
    return (
      <>
      <MDBCard style={style.card} onClick={() => this.props.history.push(`/manga/${this.props.id}/show`) }>    
       <div style={style.chapter}>
        <h6 style={style.chapterNumber}>{`# ${this.props.chapter}`}</h6>
       </div>
      <MDBCardImage  className="img-fluid" src={this.props.image} waves />
      <MDBCardBody style={style.cardBody}>
       <h6 style={style.cardTitle}>{this.props.title}</h6>       
      </MDBCardBody> 
      
      </MDBCard>
      </>
  )
  }
  
}

const MMCardTitle = props => {
  if (props.name) {
    return (
      <MDBCardHeader text={"deep-orange darken-2"} color={'white-text'} style={{fontWeight: 'bold', fontSize: 17}}>
        {props.name}
      </MDBCardHeader>
    )
  }
  else {
    return true
  }
}


class MMCardView extends Component {

  render(){
    let {title, color, children, container, margin, main} = this.props 
    return (     
      <div style={{paddingTop: this.props.padding ? this.props.padding : 20}} className={`${[container ? 'container ' : ' ',  margin  ? ' '+margin : ' ']}`}>
      <MDBCard style={{backgroundColor: "#fff" }}>       
        <MMCardTitle name={title} color={color}/>   
        <MDBCardBody style={{color: '#000'}}> 
            {children}
        </MDBCardBody>
      </MDBCard> 
      </div>    
    );
  }
  }


const style = {
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


MMCard = withRouter(MMCard);
export {MMCard, MMCardView}