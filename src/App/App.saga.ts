import { takeLatest } from 'redux-saga/effects';
import { AppActions } from './App.actions';

function* intializeApplicationData(action: any) {
  // const data = yield fetch(`http://localhost:8000`, {
  //   method: 'GET',
  // }).then((response) => response.text());
  // console.log('DATA FROM SERVER:', data);
}

export function* appSaga() {
  yield takeLatest(AppActions.INIT_APP_DATA, intializeApplicationData);
}
