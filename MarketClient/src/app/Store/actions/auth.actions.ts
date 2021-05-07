import { createAction, props } from '@ngrx/store';
import { Account } from '../models/Account';

export const LogIn = createAction('[ACCOUNT] LogIn', props<Account>());
export const LogOut = createAction('[ACCOUNT] LogOut');
export const LogInSuccess = createAction(
  '[ACCOUNT] LogInState',
  props<Account>()
);
export const LogInFailed = createAction(
  '[ACCOUNT] LogInState',
  props<{ data: string[] }>()
);
