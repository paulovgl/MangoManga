import React , {Component} from 'react'
import {MMTheme} from '../theme'
import {StyleSheet, css} from 'aphrodite'

const styles = (theme) => StyleSheet.create ({
  swsSpinner: {
    color: theme.spinner.color
  }
})


class MMSpinner extends Component {
  static contextType = MMTheme

  render(){   
    let theme = this.context
    return (
      <div className='text-center' >
        <div className={`spinner-border ${css(styles(theme).swsSpinner)}` }
        style={{width: this.props.size ? this.props.size : 40, height:this.props.size ? this.props.size : 40}} 
        role="status">
              <span className="sr-only">Loading...</span>
            </div>
      </div>
    )
  }
}

export {MMSpinner}