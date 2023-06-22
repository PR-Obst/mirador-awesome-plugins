import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { showConfetti, hideConfetti } from '../state/actions';
import { getConfettiEnabled } from '../state/selectors';
import WindowConfettiButton from '../components/WindowConfettiButton';

const mapStateToProps = (state, { windowId }) => ({
  confettiEnabled: getConfettiEnabled(state, { windowId }).confettiEnabled,
});

const mapDispatchToProps = (dispatch, { windowId }) => ({
  showConfetti: () => { dispatch(showConfetti(windowId)); },
  hideConfetti: () => { dispatch(hideConfetti(windowId)); },
})


const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
)

export default enhance(WindowConfettiButton);
