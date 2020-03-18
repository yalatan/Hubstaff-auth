import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path     : 'login',
    redirectTo: 'login'
  },
{
  path     : 'home',
  component: HomePageComponent
},

{
  path     : '**',
  redirectTo: 'login'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
