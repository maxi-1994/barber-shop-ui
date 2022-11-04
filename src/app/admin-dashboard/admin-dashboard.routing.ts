import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AppointmentsTableComponent } from './appointments-table/appointments-table.component';
import { BarbersTableComponent } from './barbers-table/barbers-table.component';
import { ServicesTableComponent } from './services-table/services-table.component';
import { UsersTableComponent } from './users-table/users-table.component';

// TODO:
//      Genenerar child routes del dashboard lazy loading

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    children: [ // Cargarlas con lazy loading.
      { path: 'tabla-turnos', component: AppointmentsTableComponent, data: { title: 'Turnos' } },
      { path: 'tabla-barberos', component: BarbersTableComponent, data: { title: 'Barberos' } },
      { path: 'tabla-servicios', component: ServicesTableComponent, data: { title: 'Servicios' } },
      { path: 'tabla-usuarios', component: UsersTableComponent, data: { title: 'Usuarios' } },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
