import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalService } from './services/hospital.service';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DetailsComponent } from './details/details.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
 {path:'admin',component : AdminComponent},
 {path:'patient',component: PatientComponent},
 {path:'doctor',component: DoctorComponent},
 {path:'Details/:Patid',component: DetailsComponent},
 {path:'Appointment/:Patid',component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
