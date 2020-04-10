import { AppActions } from './App.actions';
import { Record } from 'immutable';

export interface IAppState {
  init: boolean;
}

const appStateInitialRecord = Record<IAppState>({
  init: false,
});

export function appReducer(state = appStateInitialRecord(), action: { type: string; payload: any }) {
  switch (action.type) {
    case AppActions.INIT_APP_DATA:
      console.log('INIT APP DATA HAPPENS');
      return state.set('init', true);
    default:
      return state;
  }
}
