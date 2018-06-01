import React from 'react';
import classes from './Content.scss';

const contnet = (props) => (
  <div className={classes.Content}>
    {props.children}
  </div>
)

export default contnet;
