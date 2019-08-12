import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospital.service';
import {ActivatedRoute,Route} from '@angular/router'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
hospitalzz
Patid
ID
  constructor(public hospitalService: HospitalService, public route: ActivatedRoute) { 
    this.hospitalzz = this.hospitalService.getappo();
  }

  Addappo(appodate,apporeason){
    this.hospitalService.Addappo(this.Patid, appodate,apporeason,this.ID)
    this.hospitalzz = this.hospitalService.viewAppointment(this.Patid, this.ID)
  }

  editAppo(patient){
    this.hospitalService.editAppo(patient)
  }

deleteAppo(patient){
  this.hospitalService.deleteAppo(patient)
}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.Patid = params.get('Patid');
    this.ID = params.get('ID');
      
     this.hospitalzz= this.hospitalService.viewAppointment(this.Patid, this.ID)
    

  })
  }
  }

