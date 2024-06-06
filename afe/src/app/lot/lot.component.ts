import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent {

  errMsg !: string | null

  lots: any = [];

  constructor(private empService: EmployeeService){
    this.empService.getLots().subscribe((data: any)=>{
      this.lots = data.data;

      this.ds = new MatTableDataSource(this.lots);
      this.ds.paginator = this.pages;

    })
    
  }
  
  dispCol = [
    '#', 'Description', 'Total Spots', 'Edit'
  ]

  ds = new MatTableDataSource(this.lots);

  @ViewChild(MatPaginator) pages!: MatPaginator;

}
