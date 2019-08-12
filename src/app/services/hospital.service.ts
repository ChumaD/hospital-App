import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { getMatTooltipInvalidPositionError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
 empty = true 
ListPatient =[]
appointment = []
doctorList =[]

  constructor() { }
  

  Addpatient(patname,patsurname,patage,patgender,id){
  this.ListPatient.push({
    Name:patname,
    Surname:patsurname,
    Age:patage,
    gender:patgender,
    Patid:id  
  })
  }

  getList(){
    console.log(this.ListPatient);
    
    return this.ListPatient
      }
  
getpatient(Patid){
  for (let x = 0; x => this.ListPatient.length; x++){
    if (this.ListPatient[x].Patid === Patid){
    return this.ListPatient[x]}
  }
}

// viewappo(Patid){
//   for (let x = 0; x => this.appointment.length; x++){
//     if (this.appointment[x].Patid === Patid){
//     return this.appointment[x]}
//   }
// }
appodate: string = '';
apporeason : string = '';
appodoctor : string = '';

Addappo(patId,appodate,apporeason,appodoctor){
  this.appointment.push({patientId: patId,date: appodate,reason: apporeason,doctor:appodoctor})
  this.empty = false
  this.appodate = null
  this.apporeason = null
  this.appodoctor = null
}

editAppo(patient){
  let index = this.appointment.indexOf(patient)
  let newd = prompt("Edit date", patient.newdate)
  let newr = prompt("Edit reason", patient.newreason)
  let newdoc =prompt("Edit doctor")

if (newd != null || newr != null || newdoc != null){
  this.appointment[index]. date=newd
  this.appointment[index]. reason=newr
  this.appointment[index]. doctor=newdoc
}
}

deleteAppo(patient){
  let index = this.appointment.indexOf(patient)
  this.appointment.splice(index,1)
  if(this.appointment.length <=0)
  this.empty=true
}

getappo(){
  return this.appointment
}

viewAppointment(Patid,ID){
  let selectedAppointment = []
  this.appointment.forEach(patient =>
    {
       if(patient.patientId == Patid)
       (patient.docId == ID)
       {
        selectedAppointment.push(patient)
       }
     })
    return selectedAppointment
 }

 

adddoc(ID,docname,docsurname,specials){
  this.doctorList.push({docId:ID,dname:docname,dsurname:docsurname,spec:specials})
}
getdoc(){
  return this.doctorList
}
}
