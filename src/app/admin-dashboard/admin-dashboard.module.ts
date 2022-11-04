import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AppointmentsTableComponent } from './appointments-table/appointments-table.component';
import { ServicesTableComponent } from './services-table/services-table.component';
import { BarbersTableComponent } from './barbers-table/barbers-table.component';
import { UsersTableComponent } from './users-table/users-table.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AppointmentsTableComponent,
    ServicesTableComponent,
    BarbersTableComponent,
    UsersTableComponent,
  ],
  exports: [
    AdminDashboardComponent,
    AppointmentsTableComponent,
    ServicesTableComponent,
    BarbersTableComponent,
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class AdminDashboardModule { }
