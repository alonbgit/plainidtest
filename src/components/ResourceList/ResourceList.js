import React from 'react';
import classes from './ResourceList.scss';
import ResourceListItem from './ResourceListItem/ResourceListItem';

const resourceList = (props) => (

  <div className={classes.ResourceList}>
    <ul>
      {props.resources.map((resource) => {
        return <ResourceListItem
                  name={resource.name}
                  key={resource.id}
                  selected={props.selectedResource === resource}
                  clicked={() => props.changed(resource)}/>
      })}
    </ul>
  </div>

)

export default resourceList;
