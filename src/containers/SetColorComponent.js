import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import SetColorComponent from '../components/SetColorComponent';

const styles = theme => ({
  ctrlBtn: {
    margin: theme.spacing(1),
  },
});

const enhance = compose(
  withTranslation(),
  withStyles(styles),
)

export default enhance(SetColorComponent);
