import translations from "./locales";
import GitHubBranding from "./containers/GitHubBranding";
import SetColorComponent from "./containers/SetColorComponent";
import WindowComponent from "./containers/WindowComponent";
import WindowConfettiButton from "./containers/WindowConfettiButton";
import WorkspaceControlPanel from "./components/WorkspaceControlPanel";
import awesomeSaga from "./state/sagas";
import { awesomeReducer } from "./state/reducers";

export default [
  {
    component: GitHubBranding,
    mode: 'wrap',
    target: 'Branding',
    config: {
      translations,
    }
  },
  {
    component: SetColorComponent,
    mode: 'add',
    target: 'WorkspaceControlPanelButtons',
    config: {
      translations,
    }
  },
  {
    component: WorkspaceControlPanel,
    mode: 'wrap',
    target: 'WorkspaceControlPanel',
  },
  {
    component: () => null,
    mode: 'wrap',
    target: 'WorkspaceOptionsButton'
  },
  {
    component: WindowConfettiButton,
    mode: 'add',
    target: 'WindowTopBarPluginArea',
    reducers: {
      confetti: awesomeReducer,
    }
  },
  {
    component: WindowComponent,
    mode: 'wrap',
    target: 'OpenSeadragonViewer',
    reducers: {
      confetti: awesomeReducer,
    }
  },
  {
    component: () => null,
    saga: awesomeSaga,
  }
];
