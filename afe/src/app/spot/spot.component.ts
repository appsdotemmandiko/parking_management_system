import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent {

  errMsg !: string | null

  spots: any = [];

  constructor(private empService: EmployeeService){
    this.empService.getSpots().subscribe((data: any)=>{
      console.log(data)
      this.spots = data.data;
      console.log(this.spots)
      this.ds = new MatTableDataSource(this.spots);
      this.ds.paginator = this.pages;

    })
    
  }
  
  dispCol = [
    '#', 'Parking Lot', 'Number', 'Status', 'Edit'
  ]

  ds = new MatTableDataSource(this.spots);

  @ViewChild(MatPaginator) pages!: MatPaginator;
}
