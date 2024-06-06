import { Component } from '@angular/core';
import { SafeUrl, SafeValue} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  carDeets !: any
  carId !: number
  public qrcodedata: string
  qrUrl: SafeValue = ''
  
  constructor(private svc: EmployeeService, private router : ActivatedRoute){
    
    this.carId = parseInt(this.router.snapshot.paramMap.get('id') || '');

    this.qrcodedata = `http://localhost:4200/vehicles/view/${this.carId}`;
    
    this.svc.getVehicle(this.carId).subscribe((data: any)=>{
      this.carDeets = data.data;

    })
  }

  // onCodeChange(qrcodedata:any){
  //   this.qrUrl = qrcodedata
  // }

  onCodeChange(url: SafeUrl){
    this.qrUrl = url
    console.log(this.qrUrl)
  }

}
