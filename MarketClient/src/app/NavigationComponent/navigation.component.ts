import {
  AfterViewInit,
  Component,
  ElementRef,
  Host,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

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
  AccessLvl = 'admin';
  UserName = 'admin';
  Logged = false;
  CurrentPage: PageType = PageType.Home;

  constructor(private router: Router) {}

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

  LogOut(): void {}
}
