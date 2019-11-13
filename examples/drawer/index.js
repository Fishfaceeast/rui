import React from 'react';
const { Component, PropTypes } = React;
import Drawer from '../../src/drawer';
import shortid from 'shortid';

const SIZES = [
  'default',
  'full',
  'auto',
];
export default class DrawerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      size: 'default'
    };
  }

  onOpen = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isOpen: true
      }
    })
  };

  onClose = () => {
    this.setState((prevState) =>{
      return {
        ...prevState,
        isOpen: false
      }
    });
  };

  onChangeSize = (e) => {
    const value = e.target.value;
    this.setState((prevState) => (
      {
        ...prevState,
        size: value
      }
    ))
  };

  render() {
    const {
      isOpen,
      size
    } = this.state;

    return (
      <div>
        {
          SIZES.map((sizeName) => {
            return (
              <p key={shortid.generate()}>
                <label htmlFor={sizeName}>{sizeName}</label>
                <input
                  type="radio"
                  name="size"
                  id={sizeName}
                  value={sizeName}
                  checked={size === sizeName}
                  onChange={this.onChangeSize}
                />
              </p>

            )
          })
        }
        <div onClick={this.onOpen}>
          open Drawer
        </div>
        <Drawer
          isOpen={isOpen}
          onClose={this.onClose}
          size={size}
        >
          <p>drawer's content short</p>
          <p>drawer's </p>
        </Drawer>
      </div>

    )
  }
}