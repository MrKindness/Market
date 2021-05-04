import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogIn } from '../Store/actions/auth.actions';
import { Account } from '../Store/models/Account';

@Component({
  templateUrl: 'auth.component.html',
  selector: 'app-auth-component',
})
export class AuthComponent {
  LoginError = '';
  LoginMark = true;
  LoginValue = '';
  PasswordValue = '';
  EMailValue = '';

  constructor(private store: Store) {}

  LogInAcc() {
    this.store.dispatch(
      LogIn({ Login: this.LoginValue, Password: this.PasswordValue })
    );
  }

  RegisterNewAcc() {}
}
