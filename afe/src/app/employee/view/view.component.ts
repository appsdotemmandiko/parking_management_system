import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  empDeets !: any
  empId !: number
  
  constructor(private empService: EmployeeService, private router : ActivatedRoute, private location: Location){
    
    this.empId = parseInt(this.router.snapshot.paramMap.get('id') || '');
    
    this.empService.getEmployee(this.empId).subscribe((data: any)=>{
      this.empDeets = data.data;

    })
    
  }

  goBack(){
    this.location.back()
  }
}
