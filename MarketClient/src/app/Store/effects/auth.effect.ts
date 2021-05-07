import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LogIn, LogInSuccess, LogInFailed } from '../actions/auth.actions';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthResult } from '../models/AuthResult';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  LoginSuccessEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LogIn),
    map((event) => this.authService.CheckLogin(event)),
    filter((event) => event.success),
    map((event: AuthResult) => LogInSuccess(event.account!))
  )
);

  // LoginSuccessEffect$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(LogIn),
  //       map((event: any) => {
  //         return this.authService.CheckLogin(event);
  //       }),
  //       map((event) => {
  //         let temp: Account = event.Data;
  //         if (event.success) {
  //           console.log(temp);
  //           LogInSuccess(temp);
  //         } else {
  //           LogInFailed(event);
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
