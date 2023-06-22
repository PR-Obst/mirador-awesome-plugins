import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, IconButton } from '@material-ui/core';

class GitHubBranding extends Component {
  render() {
    const {
      t,
      variant,
      ...ContainerProps
    } = this.props;
    return (
      <div {...ContainerProps}>
        {variant === 'wide' && (
          <Typography align="center" component="p" variant="h3">{t('gitHub')}</Typography>
        )}
        <Typography align="center">
          <IconButton
            component="a"
            href="https://github.com/ProjectMirador/mirador"
            target="_blank"
            rel="noopener"
            color="primary"
            title={t('openGitHub')}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Typography>
      </div>
    )
  }
}

GitHubBranding.propTypes = {
  t: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'wide']),
};

GitHubBranding.defaultProps = {
  t: k => k,
  variant: 'default',
};

export default GitHubBranding;
