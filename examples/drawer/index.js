import React from 'react';
const { Component, PropTypes } = React;
import Drawer from '../../src/drawer';
import shortid from 'shortid';

const SIZES = [
  'default',
  'full',
  'auto',
];

const ANCHORS = [
  'right',
  'left',
  'top',
  'bottom',
];

export default class DrawerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      size: 'default',
      anchor: 'right',
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

  onChangeAnchor = (e) => {
    const value = e.target.value;
    this.setState((prevState) => (
      {
        ...prevState,
        anchor: value
      }
    ))
  };

  render() {
    const {
      isOpen,
      size,
      anchor
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
        {
          ANCHORS.map((anchorName) => {
            return (
              <p key={shortid.generate()}>
                <label htmlFor={anchorName}>{anchorName}</label>
                <input
                  type="radio"
                  name="anchor"
                  id={anchorName}
                  value={anchorName}
                  checked={anchor === anchorName}
                  onChange={this.onChangeAnchor}
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
          anchor={anchor}
        >
          <p>drawer's content short</p>
          <p>from {anchor}</p>
        </Drawer>
      </div>

    )
  }
}