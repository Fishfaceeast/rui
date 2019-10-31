import React from 'react';
const { Component, PropTypes } = React;
import Drawer from '../../src/drawer';
import Overlay from "../../src/overlay";

export default class DrawerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onOpen = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpen: true
      }
    })
  }

  onClose = () => {
    this.setState((prevState) =>{
      return {
        ...prevState,
        isOpen: false
      }
    });
  }
  render() {
    const {
      isOpen
    } = this.state;

    return (
      <div>
        <div onClick={this.onOpen}>
          open Drawer
        </div>
        <Drawer
          isOpen={isOpen}
          onClose={this.onClose}
        >
          <span>drawer's content</span>
        </Drawer>
      </div>

    )
  }
}