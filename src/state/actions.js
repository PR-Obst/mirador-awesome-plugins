export const PluginActionTypes = {
  CONFETTI_SHOW: 'mirador-awesome-plugins/CONFETTI_SHOW',
  CONFETTI_HIDE: 'mirador-awesome-plugins/CONFETTI_HIDE'
};

export function showConfetti(windowId) {
  return {
    type: PluginActionTypes.CONFETTI_SHOW, windowId,
  };
}

export function hideConfetti(windowId) {
  return {
    type: PluginActionTypes.CONFETTI_HIDE, windowId,
  };
}
