import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';
import SetColorDialog from '../containers/SetColorDialog';

class SetColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.openColorDialog = this.openColorDialog.bind(this);
    this.closeColorDialog = this.closeColorDialog.bind(this);
  }

  openColorDialog(event) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  closeColorDialog() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const { classes, t } = this.props;
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <MiradorMenuButton
          aria-haspopup="true"
          aria-label="awesome button to change color"
          aria-owns="worspace-menu"
          className={classes.ctrlBtn}
          id="setColorBtn"
          onClick={this.openColorDialog} >
          <ColorLensIcon />
        </MiradorMenuButton>
        <SetColorDialog
          open={anchorEl}
          handleClose={this.closeColorDialog} />
      </React.Fragment>
    )
  }
}

export default SetColorComponent;
