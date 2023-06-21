import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { updateConfig } from 'mirador/dist/es/src/state/actions';
import SetColorDialog from '../components/SetColorDialog';

const mapDispatchToProps = (dispatch) => ({
    updateConfig: (config) => { 
        dispatch(updateConfig({theme: config.theme, themes: config.themes}));
    },
});

const enhance = compose(
    withTranslation(),
    connect(null, mapDispatchToProps),
);

export default enhance(SetColorDialog);
