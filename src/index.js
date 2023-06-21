import translations from "./locales";
import GitHubBranding from "./containers/GitHubBranding";
import SetColorComponent from "./containers/SetColorComponent";

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
    component: () => null,
    mode: 'wrap',
    target: 'FullScreenButton'
  }
];