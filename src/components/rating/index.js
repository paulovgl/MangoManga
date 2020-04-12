import React, { Component } from 'react';
import Rating from 'react-rating';
import Api from '../../core/api';
import PopUp from '../notifications'
// var Rating = require('react-rating');

export default class MMRating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      mangaId: this.props.mangaId,
      n_votos: this.props.votes,
      rating: this.props.initialRating
    };

    this.handleStaffRatingChange = this.handleStaffRatingChange.bind(this);
  }

  handleClick(event) {
    this.setState({value: undefined});
  }

  handleStaffRatingChange = (rating) => {
    const starNumber = {rating: rating}
    Api.addMangaRating(this.state.mangaId, starNumber ).then(res => {
      if(res.status === 'success'){
        this.setState({rating: res.data.data.rating, n_votos: res.data.data.n_votes  });
      }
      else if(res.status === 'error'){
        res.content.map((x,y)=> {
            PopUp.showMessage('error', x.message)
        })
      }      
      
    })
    
}

  render() {
    return (
      <div>
        <Rating 
        initialRating={this.state.rating}
        style={{color: '#d32f2f'}}
        stop={5}        
        onChange={this.handleStaffRatingChange}        
        emptySymbol={['far fa-heart fa-2x low', 'far fa-heart fa-2x low',
          'far fa-heart fa-2x medium', 'far fa-heart fa-2x medium',
          'far fa-heart fa-2x high', 'far fa-heart fa-2x high']}
        fullSymbol={['fa fa-heart fa-2x low', 'fa fa-heart fa-2x low',
          'fa fa-heart fa-2x medium', 'fa fa-heart fa-2x medium',
          'fa fa-heart fa-2x high', 'fa fa-heart fa-2x high']}
      />
        <strong className='ml-3' style={{fontSize: 14}}>{this.state.n_votos} Votos</strong>
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
