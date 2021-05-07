import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Account } from '../models/Account';
import { LogInFailed, LogInSuccess, LogOut } from '../actions/auth.actions';

export interface AccountState {
  account?: Account;
  Logged: boolean;
}

export const initialState: AccountState = {
  account: { Login: '', Password: '', AccessLevel: -1, EMail: '' },
  Logged: false,
};

export const AccountReducer = createReducer(
  initialState,
  on(LogOut, (state) => {
    return {
      ...state,
      account: initialState.account,
      Logged: false,
    };
  }),
  on(LogInFailed, (state, ErrorsList: { data: string[] }) => {
    return state;
  }),
  on(LogInSuccess, (state, action: Account) => {
    return {
      ...state,
      account: {
        Login: action.Login,
        Password: action.Password,
        AccessLevel: action.AccessLevel,
        EMail: action.EMail,
      },
      Logged: true,
    };
  })
);

export const featureSelector = createFeatureSelector<AccountState>('Account');

export const AccountDataSelector = createSelector(featureSelector, (state) => {
  return state.account;
});

export const AccountLoggedSelector = createSelector(
  featureSelector,
  (state) => {
    return state.Logged;
  }
);
