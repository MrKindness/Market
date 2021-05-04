import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Account } from '../models/Account';
import { LogInSuccess } from '../actions/auth.actions';

export interface AccountState {
  account?: Account;
}

export const initialState: AccountState = {
  account: undefined,
};

export const AccountReducer = createReducer(
  initialState,
  on(LogInSuccess, (state) => {
    return {
      ...state,
      account: state.account,
    };
  })
);

export const featureSelector = createFeatureSelector<AccountState>('account');

export const AccountSelector = createSelector(
  featureSelector,
  (state) => state.account
);
