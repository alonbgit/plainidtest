import React from 'react';
import classes from './GeneralDetails.scss';
import commonClasses from '../ResourceDetailsCommon.scss';
import HelpIcon from '../../../assets/images/help-12.svg';

const generalDetails = (props) => (
  <div className={classes.GeneralDetails}>

    <div className={commonClasses.Helper}>
      <div className={commonClasses.Header}>GENERAL DETAILS</div>
      <img src={HelpIcon} alt=""/>
    </div>

    <div className={commonClasses.HelpHeader}>explination under each section.</div>

    <div className={classes.ResourceDetailsForm}>

      <div className={classes.FormItem}>
        <div className={classes.ResourceHeader}>NAME</div>
        <div className={classes.ResourceValue}>{props.resource.name}</div>
      </div>

      <div className={classes.FormItem}>
        <div className={classes.ResourceHeader}>DESCRIPTION</div>
        <div className={[classes.ResourceValue, classes.Description].join(' ')}>{props.resource.description}</div>
      </div>

      <div className={classes.FormItem}>
        <div className={classes.ResourceHeader}>RESOURCE TYPE</div>
        <div className={classes.ResourceValue}>{props.resource.resourceType}</div>
      </div>

      <div className={classes.FormItem}>
        <div className={classes.ResourceHeader}>PATH</div>
        <div className={classes.ResourceValue}>{props.resource.path}</div>
      </div>

    </div>

  </div>
)

export default generalDetails;
