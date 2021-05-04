import { ActionReducerMap } from '@ngrx/store';
import { AccountState, AccountReducer } from './reducers/account.reducer';
import { ItemsState, ItemsReducer } from './reducers/items.reducer';

export interface State {
  Account: AccountState;
  Items: ItemsState;
}

export const reducers: ActionReducerMap<State> = {
  Account: AccountReducer,
  Items: ItemsReducer,
};
