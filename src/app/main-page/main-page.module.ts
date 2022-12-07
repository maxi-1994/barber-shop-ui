import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    NgxMatMomentModule,
    NgxMatDatetimePickerModule, 
    NgxMatNativeDateModule, 
    NgxMatTimepickerModule,
    SharedModule,
  ]
})
export class MainPageModule { }
