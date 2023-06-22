import React, { Component } from 'react';


class WorkspaceControlPanel extends Component {
  render() {
    const variant = 'default';

    return (
      <this.props.TargetComponent {...this.props.targetProps} variant={variant} />
    );
  }
}

export default WorkspaceControlPanel;
