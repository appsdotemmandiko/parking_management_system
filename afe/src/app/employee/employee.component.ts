import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  EmpArray : any[] = [];
  isResultLoaded = false;

  name: string ="";
  email: string ="";
  pfno: string ="";
  designation: string="";
  department: string="";
  directorate: string ="";
  mobile: Number =0;
  altno: string ="";
 
  currentEmpID = "";

  constructor(private http: HttpClient )
  {
    this.getAllEmployees();
 
  }
  getAllEmployees()
  {
    
    this.http.get("http://127.0.0.1:8000/api/employees")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.EmpArray = resultData;
    });
  }
}
