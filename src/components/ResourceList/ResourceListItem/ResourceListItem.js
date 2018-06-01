import React from 'react';
import classes from './ResourceListItem.scss';
import CheckImage from '../../../assets/images/active.svg';
import ArrowImage from '../../../assets/images/arrow-right.svg';

const ResourceListItem = (props) => {

  let itemClasses = [classes.ResourceListItem];
  if (props.selected)
    itemClasses.push(classes.Selected);

  let arrowClasses = [classes.Arrow];
  if (props.selected)
    arrowClasses.push(classes.ArrowActive);

  return (
    <li className={itemClasses.join(' ')}
        onClick={props.clicked}>
      <img src={CheckImage} className={classes.Check} alt=""/>
      <span className={classes.ItemName}>{props.name}</span>
      <img src={ArrowImage} className={arrowClasses.join(' ')} alt=""/>
    </li>
  )

}

export default ResourceListItem;
