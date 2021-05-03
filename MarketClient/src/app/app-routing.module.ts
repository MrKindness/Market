import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './ContentComponent/Content.component';
import { AuthComponent } from './AuthComponent/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: ContentComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
