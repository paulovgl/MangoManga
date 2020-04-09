import React, {Component } from 'react';
import {MDBBtn, MDBPopoverBody, MDBPopoverHeader, MDBPopover, MDBIcon} from 'mdbreact'
import { MMTheme } from '../theme';


 class MMPopoverRemove extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {show: false};
}

  render() {
    let theme = this.context
    return (
      <MDBPopover
        modifiers={{ removeOnDestroy: { enabled: false } }}
        placement="top"
        popover  
        clickable
        id={this.props.id}
      >
        <MDBBtn color='red' className='btn-sm px-3'><MDBIcon icon='trash'></MDBIcon></MDBBtn>
        <div>
          <MDBPopoverHeader className='text-center red white-text'>
            Deseja remover ?
              </MDBPopoverHeader>
          <MDBPopoverBody >
            <div className='text-center'>
              <MDBBtn onClick={this.props.onClick} color='success' className='px-3' size='sm'><MDBIcon icon='check' /></MDBBtn>
              <MDBBtn color='red' className='px-3' onClick={() => { }} size='sm'><MDBIcon icon='times' /></MDBBtn>
            </div>
          </MDBPopoverBody>
        </div>
      </MDBPopover>
    )
  }
}
MMPopoverRemove.contextType = MMTheme

export {MMPopoverRemove} 