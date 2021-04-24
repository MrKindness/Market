import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './ContentComponent/Content.component';
import { LoginComponent } from './LoginComponent/login.component';
import { NavigationComponent } from './NavigationComponent/navigation.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavigationComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
