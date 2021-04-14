import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [ 
 { path: 'users-list', component: UsersListComponent }, 
 { path: '', component: LandingPageComponent, pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
