import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
 doctorz

  constructor(public hospService:HospitalService) {
    this.doctorz = hospService.getdoc() 
   }

  ngOnInit() {
  }

  adddoc(ID,docname,docsurname,specials){
    this.hospService.adddoc(ID,docname,docsurname,specials)
  }

}
