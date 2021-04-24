import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './ContentComponent/Content.component';
import { LoginComponent } from './LoginComponent/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
