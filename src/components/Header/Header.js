import React from 'react';
import classes from './Header.scss';
import Logo from '../Logo/Logo';

const header = (props) => (
  <div className={classes.Header}>
    <Logo/>
    <span className={classes.HeaderName}>PlainID- Demo App</span>
  </div>
)

export default header;
