import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AppointmentCreate, AppointmentCreateResponse } from '../interfaces/appointments.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  public baseUrl = 'http://localhost:8000/api/';
  public createAppointmentEndpoint = 'appointments/create-appointment';

  constructor(private http: HttpClient) { }

  getAllAppointment(): Observable<any> {
    return of('get all appointments - token required');
  }

  createAppointment(body: AppointmentCreate): Observable<AppointmentCreateResponse> {
    return this.http.post<AppointmentCreateResponse>(this.baseUrl + this.createAppointmentEndpoint, body);
  }

  updateAppointment(): Observable<any> {
    return of('updated appointments - token required');
  }

  deleteAppointment(): Observable<any> {
    return of('delete appointments');
  }

}
