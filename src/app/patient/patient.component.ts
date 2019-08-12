import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientList
  constructor(public hospitalService:HospitalService) {
      this.patientList = hospitalService.getList()
      console.log(this.patientList);
      
   }

  ngOnInit() {
    
  }

 
}
