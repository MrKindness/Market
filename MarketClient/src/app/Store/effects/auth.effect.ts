import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LogIn, LogInSuccess, LogInFailed } from '../actions/auth.actions';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';
import { OperationResult } from '../models/OperationResult';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  authEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LogIn),
        map((event: any) => {
          const result: OperationResult = this.authService.CheckLogin(event);

          if (result.success) {
            LogInSuccess();
          } else {
            LogInFailed(result);
          }
        })
      ),
    { dispatch: false }
  );
}
