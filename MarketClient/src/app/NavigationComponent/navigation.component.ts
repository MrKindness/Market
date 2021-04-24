import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'navigation.component.html',
  selector: 'navigation-component',
  styleUrls: ['navigation.component.css'],
})
export class NavigationComponent {
  @ViewChild('HomeButton', { static: false }) HomeButton!: ElementRef;
  @ViewChild('LoginButton', { static: false }) LoginButton!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.HomeButton.nativeElement.disabled = true;
  }

  OpenLogin() {
    this.router.navigate(['/login']);
    this.HomeButton.nativeElement.disabled = false;
    this.LoginButton.nativeElement.disabled = true;
  }

  OpenHome() {
    this.router.navigate(['/']);
    this.HomeButton.nativeElement.disabled = true;
    this.LoginButton.nativeElement.disabled = false;
  }

  LogOut() {}
}
