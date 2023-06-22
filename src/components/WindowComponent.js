import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfettiComponent from './ConfettiComponent';


class WindowComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { targetProps, TargetComponent, confettiEnabled } = this.props;

    return (
      <React.Fragment>
        <TargetComponent {...targetProps} />
        {confettiEnabled && <ConfettiComponent {...targetProps.viewerConfig} />}
      </React.Fragment>
    )
  }
}

WindowComponent.defaultProps = {
  confettiEnabled: false,
}

WindowComponent.propTypes = {
  confettiEnabled: PropTypes.bool,
}

export default WindowComponent;
