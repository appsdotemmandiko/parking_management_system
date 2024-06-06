import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  errMsg !: string | null

  cars: any = [];

  constructor(private svc: EmployeeService){
    this.svc.getVehicles().subscribe((data: any)=>{
      this.cars = data.data;
      this.ds = new MatTableDataSource(this.cars);
      this.ds.paginator = this.pages;

    })
    
  }
  
  dispCol = [
    '#', 'Owner', 'RegNo', 'Make', 'Model', 'View', 'Edit'
  ]

  ds = new MatTableDataSource(this.cars);

  @ViewChild(MatPaginator) pages!: MatPaginator;
}
