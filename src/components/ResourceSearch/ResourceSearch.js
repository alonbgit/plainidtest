import React from 'react';
import classes from './ResourceSearch.scss';
import SearchInput from './SearchInput/SearchInput';

const resourceSearch = (props) => (
  <div className={classes.ResourceSearch}>
    <div className={classes.MyResources}>My Resources</div>
    <p className={classes.Description}>
      explination under each section. maybe<br/>
      show only at hover/pressed
    </p>
    <SearchInput changed={props.changed}/>
  </div>
)

export default resourceSearch;
