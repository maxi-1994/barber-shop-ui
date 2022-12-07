import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';;
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { ThemePalette } from '@angular/material/core';

import { AppointmentsService } from 'src/app/core/services/appointments.service';

import { AppointmentCreate } from '../../core/interfaces/appointments.interface';
import Swal from 'sweetalert2';

 @Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.scss']
})
export class AppointmentsFormComponent implements OnInit {
  // ------------------------
  @ViewChild('picker') picker: any;
  public disabled: boolean = false;
  public showSpinners: boolean = true;
  public showSeconds: boolean = false;
  public touchUi: boolean = true;
  public enableMeridian: boolean = false;
  public minDate: Date = new Date();
  public maxDate: string = '';
  public stepHour: number = 1;
  public stepMinute: number = 30;
  public stepSecond: number = 1;
  public color: ThemePalette = 'primary';
  public dateControl!: FormControl;
  // ------------------------

  public stepperOrientation!: Observable<StepperOrientation>;
  public servicesForm!: FormGroup;
  public professionalsForm!: FormGroup;
  public clientForm!: FormGroup;

  public formValues!: AppointmentCreate;

  constructor(private fb: FormBuilder, 
              private appointmentsService: AppointmentsService,
              public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.initFormStepper();
  }

  private initFormStepper(): void {
    const currentDate = new Date();
    currentDate.setHours(12, 0, 0);

    this.dateControl = new FormControl(currentDate);

    this.servicesForm = this.fb.group({
      service: ['corte', Validators.required],
    });
  
    this.professionalsForm = this.fb.group({
      professional: ['Primero/a Disponible', Validators.required],
    });
  
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      clientLastName: ['', Validators.required],
      clientEmail: ['', Validators.required],
      clientNumber: ['', Validators.required],
      clientComment: [''],
    });
  }

  public getFormValues(): void {
    const date = this.dateControl.value.toLocaleString();

    this.formValues = {
      ...this.servicesForm.value,
      ...this.professionalsForm.value,
      ...this.clientForm.value,
      date
    };

    this.appointmentsService.createAppointment(this.formValues).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.msg.title,
        text: res.msg.description,
        showConfirmButton: true,
      });
    });
  }
}
