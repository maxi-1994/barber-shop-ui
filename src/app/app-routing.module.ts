import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { DashboardRoutingModule } from './admin-dashboard/admin-dashboard.routing'

import { MainPageComponent } from './main-page/main-page.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
  { path: '', component: MainPageComponent, redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    DashboardRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
