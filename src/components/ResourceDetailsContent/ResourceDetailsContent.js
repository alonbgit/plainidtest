import React from 'react';
import classes from './ResourceDetailsContent.scss';
import ResourceDetailsHeader from './ResourceDetailsHeader/ResourceDetailsHeader';
import GeneralDetails from './GeneralDetails/GeneralDetails';
import ActionDetails from './ActionDetails/ActionDetails';

const resourceDetailsContent = (props) => (
  <div className={classes.ResourceDetailsContent}>
    <ResourceDetailsHeader/>
    <div className={classes.Content}>
      <GeneralDetails resource={props.resource}/>
      <ActionDetails actionIds={props.resource.actionIds}/>
    </div>
  </div>
)

export default resourceDetailsContent;
