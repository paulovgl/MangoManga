import React, {Component} from 'react';
import {MDBCard, MDBCardImage, MDBCardBody} from 'mdbreact'

class MMCard extends Component {

  render(){
    return (
      <>
      <MDBCard style={style.card}>    
       <div style={style.chapter}>
        <h6 style={style.chapterNumber}>{`# ${this.props.chapter}`}</h6>
       </div>
      <MDBCardImage className="img-fluid" src={this.props.image} waves />
      <MDBCardBody style={style.cardBody}>
       <h6 style={style.cardTitle}>{this.props.title}</h6>       
      </MDBCardBody> 
      
      </MDBCard>
      </>
  )
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



export {MMCard}