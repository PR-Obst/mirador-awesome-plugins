import { all, put, takeEvery } from 'redux-saga/effects';
import { PluginActionTypes } from './actions';

export function* notify() {
  console.log('Confetti is awesome!');
}

export default function* awesomeSaga() {
  yield all([
    takeEvery(PluginActionTypes.CONFETTI_SHOW, notify),
  ])
}
