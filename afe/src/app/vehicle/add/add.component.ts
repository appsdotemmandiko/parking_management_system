import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { EmployeeService } from 'src/app/services/employee.service';
import { Location } from '@angular/common';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  newCar : Vehicle = {
    id: undefined,
    emp_id: 0,
    regno: '',
    make: '',
    model: ''
  }
  empDeets: any[] = []
  options: any[] = []

  constructor(private svc: EmployeeService, private router: Router, private location: Location){

  }
  
  saveCar(){
    this.svc.createCar(this.newCar).subscribe(data => {
      alert("Vehicle Added");
      this.router.navigate(['vehicles']);
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(){
    this.svc.getEmployees().subscribe((data: any)=>{
      this.empDeets = data.data;
     
      for(let i=0;i<this.empDeets.length ;i++){
        this.options.push(this.empDeets[i])
     }
    })
  }

}

