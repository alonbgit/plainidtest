import React, { Component } from 'react';
import classes from './ActionDetails.scss';
import commonClasses from '../ResourceDetailsCommon.scss';
import HelpIcon from '../../../assets/images/help-12.svg';
import ActionList from './ActionList/ActionList';
import actionsService from '../../../services/actionsService';

class ActionDetails extends Component {

  state = {
    actions: []
  }

  componentWillMount() {
    this.fetchActions(this.props.actionIds);
  }

  componentWillReceiveProps(newProps) {
    this.fetchActions(newProps.actionIds);
  }

  fetchActions(actionIds) {
    actionsService.getActionByIds(actionIds).then((actions) => {
      this.setState({
        actions
      });
    });
  }

  render() {
    return (
      <div className={classes.ActionDetails}>

        <div className={commonClasses.Helper}>
          <div className={commonClasses.Header}>GENERAL DETAILS</div>
          <img src={HelpIcon} alt=""/>
        </div>

        <div className={commonClasses.HelpHeader}>explination under each section.</div>

        <ActionList actions={this.state.actions}/>

      </div>
    )
  }

}

export default ActionDetails;
