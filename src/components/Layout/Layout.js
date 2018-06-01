import React, { Component } from 'react';
import classes from './Layout.scss';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Content from '../Content/Content';
import ResourceDetailsContent from '../ResourceDetailsContent/ResourceDetailsContent';
import _ from 'lodash';

import resourcesService from '../../services/resourcesService';

class Layout extends Component {

  state = {
    resources: [],
    selectedResource: null
  }

  componentWillMount() {
    this.fetchResources();
  }

  fetchResources() {

    resourcesService.getResources().then((response) => {
      this.setState({
        resources: response.data
      });
    });

  }

  onResourceNameChanged = (name) => {

    resourcesService.getResourcesByName(name).then((response) => {
      this.setState({
        resources: response.data
      });
    });

  }

  render() {
    return (
      <div className={classes.Layout}>
        <Header/>
        <div className={classes.Content}>
          <Menu resources={this.state.resources}
                textChanged={_.debounce(this.onResourceNameChanged, 300)}
                selectedResource={this.state.selectedResource}
                changed={this.onResourceChange}/>
          <Content>
            {
              this.state.selectedResource ?
              <ResourceDetailsContent resource={this.state.selectedResource}/> : null
            }
          </Content>
        </div>
      </div>
    )
  }

  onResourceChange = (resource) => {
    this.setState({
      selectedResource: resource
    });
  }

}

export default Layout;
