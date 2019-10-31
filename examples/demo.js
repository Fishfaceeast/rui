import React from 'react';
import ReactDOM from 'react-dom';
import OverlayDemo from './overlay';
import DrawerDemo from './drawer';


const title = 'React with Webpack and Babel';

ReactDOM.render(
  <div>
    <OverlayDemo />
    <DrawerDemo />
  </div>,
  document.getElementById('app')
);