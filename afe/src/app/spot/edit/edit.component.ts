import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Spot } from 'src/app/models/spot';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editSpotForm !: FormGroup

  spotData : any | null = null
  spotId: number = 0
  lotId?:number
  lotDeets: any[] = []
  options: any[] = [];

  constructor(private fmBld : FormBuilder, 
              private rt : ActivatedRoute, 
              private svc: EmployeeService, 
              private rert : Router){
    this.editSpotForm = this.fmBld.group({
      id: [this.spotId],
      lot_id: ['', Validators.required],
      no: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(){
    const id = parseInt(this.rt.snapshot.paramMap.get('id') || '');

    if(id !== 0){
      this.svc.getSpot(id)
      .subscribe(data => {
        this.spotData = data;
        this.spotData = this.spotData.data;

        this.lotId = this.spotData.lot_id
        this.editSpotForm.patchValue(this.spotData);
      });
    }

    this.svc.getLots().subscribe((data: any)=>{
      
      this.lotDeets = data.data;

      for(let i=0;i<this.lotDeets.length ;i++){
        this.options.push(this.lotDeets[i])
     }
    })
  }

  editSpot(){
    if(this.editSpotForm.valid){
      const updatedSpotData: Spot = this.editSpotForm.value;
      this.svc.updateSpot(updatedSpotData)
      .subscribe((data)=> {
        alert("Updated")
        this.rert.navigate(['parkingspots']);
      })
    }
  }
}
