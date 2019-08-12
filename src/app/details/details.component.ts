import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import {HospitalService} from '../services/hospital.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Patid;
  hospital;
  
  constructor(public hospitalService: HospitalService, public route: ActivatedRoute) { 
   this.hospital = this.hospitalService.getList();
  }

  getpatient(Patid) {
    this.hospitalService.getpatient(Patid)
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Patid = params.get('Patid');
      
      this.hospital= this.hospitalService.getpatient(this.Patid)
      console.log(this.hospital);
      
    })
 
    console.log(this.Patid);
  }

}
