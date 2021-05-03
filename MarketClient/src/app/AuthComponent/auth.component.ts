import { Component } from '@angular/core';

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

  Method(event: Event) {
    console.log(event);
  }

  LogInAcc() {
    console.log({
      login: this.LoginValue,
      password: this.PasswordValue,
    });
  }

  RegisterNewAcc() {
    console.log({
      login: this.LoginValue,
      password: this.PasswordValue,
      email: this.EMailValue,
    });
  }
}
