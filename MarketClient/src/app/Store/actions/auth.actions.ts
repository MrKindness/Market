import { createAction, props } from '@ngrx/store';
import { Account } from '../models/Account';
import { OperationResult } from '../models/OperationResult';

export const LogIn = createAction('[ACCOUNT] LogIn', props<Account>());
export const LogOut = createAction('[ACCOUNT] LogOut');
export const LogInSuccess = createAction('[ACCOUNT] LogInState');
export const LogInFailed = createAction(
  '[ACCOUNT] LogInState',
  props<OperationResult>()
);
