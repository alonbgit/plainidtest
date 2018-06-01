import React from 'react';
import classes from './ActionItem.scss';

const actionItem = (props) => (
  <li className={classes.ActionItem}>
    {props.name}
  </li>
)

export default actionItem;
