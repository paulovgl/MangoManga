import React, {Component} from 'react'
import Header from '../../components/header/notLogged'
import {StyleSheet, css} from 'aphrodite';
import { MDBMask, MDBView } from 'mdbreact'
import './index.scss'

import loginBg from '../../images/bglogin.webp'


const styles = StyleSheet.create({
  bg: {
    height: '100vh'
  },
  tx: {
    color: 'white',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize:  55,
    fontFamily: 'Comic Neue',
  },
  span:{
    color: '#f57c00',
    fontSize:  65
  }
})

class homepage extends Component {
  render(){
    return (
        <>
        <Header />
        <MDBView>
          <img
            src={loginBg}
            className={`img-fluid ${css(styles.bg)} w-100`}

            alt=""
          />
          <MDBMask className="flex-center" overlay="black-strong" >
              <h3 className={css(styles.tx)}>O <span className={css(styles.span)}>Melhor</span> organizador de <span className={css(styles.span)}>Mangás</span> </h3>
          </MDBMask>
          </MDBView>
        </>        

    );
  }
}

export default homepage