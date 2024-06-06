import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Lot } from 'src/app/models/lot';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newLot : Lot = {
    id: undefined,
    description: "",
    totalspots: 0
  }
  
  constructor(private svc: EmployeeService, private router: Router, private location: Location){

  }
  
  saveLot(){
    this.svc.createLot(this.newLot).subscribe(data => {
      alert("Parking Lot Added");
      this.router.navigate(['parkinglots']);
    })
  }

  goBack() {
    this.location.back();
  }

}
