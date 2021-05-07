import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LogOut } from '../Store/actions/auth.actions';
import {
  AccountDataSelector,
  AccountLoggedSelector,
} from '../Store/reducers/account.reducer';

enum PageType {
  Home,
  Auth,
}

@Component({
  templateUrl: 'navigation.component.html',
  selector: 'app-navigation-component',
  styleUrls: ['navigation.component.css'],
})
export class NavigationComponent implements AfterViewInit {
  CurrentPage: PageType = PageType.Home;

  constructor(private router: Router, private store: Store) {}

  AccountLogged$ = this.store.select(AccountLoggedSelector);
  AccountData$ = this.store.select(AccountDataSelector).pipe(
    map((data) => {
      return data?.Login;
    })
  );

  ngAfterViewInit(): void {
    this.GoHome();
  }

  GoAuth(): void {
    this.router.navigate(['/auth']);
    this.CurrentPage = PageType.Auth;
  }

  GoHome(): void {
    this.router.navigate(['/']);
    this.CurrentPage = PageType.Home;
  }

  LogOut(): void {
    this.store.dispatch(LogOut());
  }
}
