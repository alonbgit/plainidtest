import React from 'react';
import classes from './ActionList.scss';
import ActionItem from './ActionItem/ActionItem';

const actionList = (props) => (
  <ul className={classes.ActionList}>
    { props.actions.map((action) => {
      return <ActionItem key={action.id}
                         name={action.name}/>
    })}
  </ul>
)

export default actionList;
