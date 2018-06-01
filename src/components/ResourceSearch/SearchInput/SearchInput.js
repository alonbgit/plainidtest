import React from 'react';
import classes from './SearchInput.scss';
import SearchImage from '../../../assets/images/search.svg';

const searchInput = (props) => (
  <div className={classes.SearchInput}>
    <input type="text"
           placeholder="Search Resource"
           onChange={ (e) => props.changed(e.target.value) }/>
    <img src={SearchImage} alt=""/>
  </div>
)

export default searchInput;
