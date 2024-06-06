import { Employee } from './../models/employee';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  errMsg !: string | null

  // employs: Employee[] = [];
  employs: any = [];

  constructor(private empService: EmployeeService){
    this.empService.getEmployees().subscribe((data: any)=>{
      this.employs = data.data;

      this.ds = new MatTableDataSource(this.employs);
      this.ds.paginator = this.pages;

    })
    
  }
  
  dispCol = [
    '#', 'Name', 'PF No.', 'Designation', 'Department', 'Action'
  ]

  ds = new MatTableDataSource(this.employs);

  @ViewChild(MatPaginator) pages!: MatPaginator;
}
