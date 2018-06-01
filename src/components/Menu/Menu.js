import React, { Component } from 'react';
import classes from './Menu.scss';
import ResourceSearch from '../ResourceSearch/ResourceSearch';
import ResourceList from '../ResourceList/ResourceList';

class Menu extends Component {

  render() {
    return (
      <div className={classes.Menu}>
        <ResourceSearch changed={this.props.textChanged}/>
        <ResourceList resources={this.props.resources}
                      selectedResource={this.props.selectedResource}
                      changed={this.props.changed}/>
      </div>
    );
  }

}

export default Menu;
