import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spot } from 'src/app/models/spot';
import { EmployeeService } from 'src/app/services/employee.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  newSpot : Spot = {
    id: undefined,
    lot_id: 1,
    no: "",
    status: ""
  }

  lotDeets: any[] = []
  options: any[] = []
  
  constructor(private svc: EmployeeService, private router: Router, private location: Location){

  }
  
  saveSpot(){
    this.svc.createSpot(this.newSpot).subscribe(data => {
      alert("Parking Spot Added");
      this.router.navigate(['parkingspots']);
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(){
    this.svc.getLots().subscribe((data: any)=>{
      this.lotDeets = data.data;
     
      for(let i=0;i<this.lotDeets.length ;i++){
        this.options.push(this.lotDeets[i])
     }
    })

  }

}
