import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

class SetColorDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colorValue: '',
      helperText: false,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  handleChange(event) {
    const { helperText } = this.state;
    
    event.preventDefault();
    if(helperText) {
      this.setState({ helperText: false });
    }
    this.setState({
      colorValue: event.target.value,
    });
  }

  handleClose() {
    const { handleClose } = this.props;

    this.setState({
      colorValue: '',
      helperText: false
    });
    handleClose();
  }

  updateColor() {
    const { updateConfig } = this.props;
    const { colorValue } = this.state;

    var reg = /^#([0-9a-f]{3}){1,2}$/i;
    
    if(reg.test(colorValue)) {
      const config = {
        themes: {
          dark: {
            palette: {
              type: 'dark',
              primary: {
                main: colorValue,
              },
              secondary: {
                main: colorValue,
              }
            }
          },
          light: {
            palette: {
              type: 'light',
            }
          }
        },
        theme: { 
          palette: {
            type: 'light',
              primary: {
                main: colorValue,
              },
              secondary: {
                main: colorValue,
              },
            },
          },
        };
  
      updateConfig(config);
    } else {
      this.setState({ 
        helperText: true 
      });
    }
  }

  render() {
    const { open, t } = this.props;
    const { helperText } = this.state;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}>
        <DialogTitle>
          {t('changeColor')}
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={this.handleChange}
            helperText={helperText && t('helperText')}
            error={helperText} />
          <DialogActions>
            <Button onClick={this.updateColor}>
              {t('submit')}
            </Button>
            <Button onClick={this.handleClose}>
              {t('cancel')}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
}

export default SetColorDialog;
