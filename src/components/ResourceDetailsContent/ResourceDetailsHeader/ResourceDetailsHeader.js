import React from 'react';
import classes from './ResourceDetailsHeader.scss';

const resourceDetailsHeader = (props) => (

  <div className={classes.ResourceDetailsHeader}>
    <div className={classes.ChooseItem}>Choose Item</div>
    <p className={classes.Description}>
      this is another option to show the explination under each section.<br/>
      maybe show only at hover/pressed?
    </p>
  </div>

)

export default resourceDetailsHeader;
