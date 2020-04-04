import React, { Fragment } from 'react'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {MMBtnReturn} from '../../components/buttons'
import {StyleSheet, css} from 'aphrodite'


import bg1 from '../../images/bg2.jpg'
import bg2 from '../../images/bg1.png'


const images = () => {
  let items = [
    bg1, 
    bg2
  ]  
   let item = items[Math.floor(Math.random() * items.length)];
   return item;
}

const styles =StyleSheet.create({
  mask:{   
    position: 'relative',
    overflow: 'hidden', 
    ':before':{
      position: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      background: 'rgba(0,0,0,0.5)',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height:'100%',
      width:'100%',
      content: " ' ' "
    }
  },
  bg:{ 
    position: 'relative',     
        
    ':before': {
      opacity: 0.1, 
      content: "' '",
      zIndex: -1,
      position: 'fixed',
      backgroundImage: `url(${images()})` ,     
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height:'100%',
      width:'100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },    
  }
  
})



const NotFound = () =>{
  return (
    <Fragment>     
      <div className={css(styles.bg)} >
        <div className={css(styles.mask)}>
      <MDBContainer className="pt-5">
        <MDBRow className='d-flex justify-content-center'>            
          <MDBCol className='col-md-6' >
            <div className='text-center'> 
              <h1 style={{fontSize:'7em'}} className="text-deep-orange darken-2 font-weight-bold">☹</h1> 
              <h1 style={{fontSize:'7em'}} className="text-orange darken-2 font-weight-bold">404!</h1>   
              <h4 className="text-orange darken-2 font-weight-bold" > Desculpa, a página não foi encontrada! </h4>
              <MMBtnReturn />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>  
      </div>
      </div> 
    </Fragment>
  )
}

export default NotFound