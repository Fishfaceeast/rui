import './index.scss';

import React from 'react';
import Overlay from '../overlay';
import classNames from 'classnames/bind';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isOpen,
      onClose,
      size='default'
    } = this.props;
    const cls = classNames({
      "drawer-wrapper": true,
      "active": isOpen,
      "size-auto": size === 'auto',
      "size-full": size === 'full'
    });
    return (
      <div className={cls}>
        <Overlay
          show={isOpen}
          autoLockScrolling={true}
          onClose={onClose}
        />
        <div className='drawer-content'>
          { this.props.children }
          <div
            className='icon-close'
            onClick={onClose}
          >X</div>
        </div>
      </div>
    );
  }
}