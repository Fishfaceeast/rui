import './index.scss';

import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.isOpen
    };
  }

  render() {
    return (
      <div className='drawer-wrapper'>
        <div className='drawer-content'>{ this.props.children }</div>
        <div className='icon-close'>X</div>
      </div>
    );
  }
}