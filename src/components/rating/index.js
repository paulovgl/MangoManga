import React, { Component } from 'react';
import Rating from 'react-rating';
// var Rating = require('react-rating');

export default class MMRating extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({value: undefined});
  }

  render() {
    return (
      <div>
        <Rating {...this.props} style={{color: '#d32f2f'}}
        stop={5}

        emptySymbol={['far fa-heart fa-2x low', 'far fa-heart fa-2x low',
          'far fa-heart fa-2x medium', 'far fa-heart fa-2x medium',
          'far fa-heart fa-2x high', 'far fa-heart fa-2x high']}
        fullSymbol={['fa fa-heart fa-2x low', 'fa fa-heart fa-2x low',
          'fa fa-heart fa-2x medium', 'fa fa-heart fa-2x medium',
          'fa fa-heart fa-2x high', 'fa fa-heart fa-2x high']}
      />
        {/* <Rating {...this.props} 
          stop={5}  
          emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
         'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
         'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
          fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
         'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
         'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
          initialRating={this.state.value}
        /> */}
        {/* <button onClick={this.handleClick}>Reset</button> */}
      </div>
    );
  }
}
