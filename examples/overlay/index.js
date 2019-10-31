
import React from 'react';
const { Component, PropTypes } = React;
import Overlay from '../../src/overlay';

export default class OverlayDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenOverlay: false
    };
  }

  onOpen = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpenOverlay: true
      }
    })
  }

  onClose = () => {
    this.setState((prevState) =>{
      return {
        ...prevState,
        isOpenOverlay: false
      }
    });
  }
  render() {
    const {
      isOpenOverlay
    } = this.state;

    return (
      <div>
        <div onClick={this.onOpen}>
          open Overlay
        </div>
        <Overlay
          show={isOpenOverlay}
          autoLockScrolling={true}
          onClose={this.onClose}
        />
      </div>

    )
  }
}