import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getWorkspace } from 'mirador/dist/es/src/state/selectors';
import { getConfettiEnabled } from '../state/selectors';
import WindowComponent from '../components/WindowComponent';

const mapStateToProps = (state, { windowId }) => ({
  confettiEnabled: getConfettiEnabled(state, { windowId }).confettiEnabled,
});


const enhance = compose(
  connect(mapStateToProps, null),
  withTranslation(),
)

export default enhance(WindowComponent);
