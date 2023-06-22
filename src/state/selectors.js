import { miradorSlice } from 'mirador/dist/es/src/state/selectors';

export function getConfettiEnabled(state, { windowId }) {
  return (miradorSlice(state).confetti || {})[windowId];
}
