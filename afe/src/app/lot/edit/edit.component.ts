import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lot } from 'src/app/models/lot';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editLotForm !: FormGroup

  lotData : any | null = null
  lotId: number = 0

  constructor(private fmBld : FormBuilder, 
              private rt : ActivatedRoute, 
              private svc: EmployeeService, 
              private rert : Router){
    this.editLotForm = this.fmBld.group({
      id: [this.lotId],
      description: ['', Validators.required],
      totalspots: ['', Validators.required]
    });
  }

  ngOnInit(){
    const id = parseInt(this.rt.snapshot.paramMap.get('id') || '');
    if(id !== 0){
      this.svc.getLot(id)
      .subscribe(data => {
        this.lotData = data;
        this.lotData = this.lotData.data;
        this.editLotForm.patchValue(this.lotData);
      });
    }
  }

  editLot(){
    if(this.editLotForm.valid){
      const updatedLotData: Lot = this.editLotForm.value;
      this.svc.updateLot(updatedLotData)
      .subscribe((data)=> {
        alert("Updated")
        this.rert.navigate(['parkinglots']);
      })
    }
  }

}
