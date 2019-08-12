import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

hospital;

  constructor(public hospitalservices: HospitalService) {
    this.hospital = this.hospitalservices.getList()
   }

  ngOnInit() {
  }

  Addpatient(patname,patsurname,patage,patgender,id){
   this.hospitalservices.Addpatient(patname, patsurname, patage,patgender,id) 
  }
  
}
