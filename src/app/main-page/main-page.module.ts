import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { MainPageComponent } from './main-page.component';
import { AppointmentsFormComponent } from './appointments-form/appointments-form.component';


@NgModule({
  declarations: [
    MainPageComponent,
    AppointmentsFormComponent
  ],
  exports: [
    MainPageComponent,
    AppointmentsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MainPageModule { }
