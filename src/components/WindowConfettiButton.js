import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CloudOffIcon from '@material-ui/icons/CloudOff';

class WindowConfettiButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { confettiEnabled, showConfetti, hideConfetti, t } = this.props;
    return (
      <MiradorMenuButton
        onClick={confettiEnabled ? hideConfetti : showConfetti}
        aria-label={confettiEnabled ? t('hideConfetti') : t('showConfetti')} >
        {confettiEnabled ? <CloudOffIcon /> : <CloudQueueIcon />}
      </MiradorMenuButton>
    )
  }
}

WindowConfettiButton.propTypes = {
  confettiEnabled: PropTypes.bool,
  t: PropTypes.func,
  showConfetti: PropTypes.func,
  hideConfetti: PropTypes.func,
}

WindowConfettiButton.defaultProps = {
  confettiEnabled: false,
  t: () => {},
  showConfetti: () => {},
  hideConfetti: () => {},
}

export default WindowConfettiButton;
