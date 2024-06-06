import { EmployeeService } from './../../services/employee.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newEmp : Employee = {
    id: undefined,
    name: "",
    email: "",
    pfno: "",
    designation: "",
    department: "",
    directorate: "",
    mobile: 0,
    altno: ""
  }
  
  constructor(private svc: EmployeeService, private router: Router, private location: Location){

  }
  
  saveEmp(){
    this.svc.createEmployee(this.newEmp).subscribe(data => {
      console.log("Employee Added");
      this.router.navigate(['employees']);
    })
  }

  goBack() {
    this.location.back();
  }
}
