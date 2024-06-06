import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  @ViewChild('emp', {static: false}) emp?: ElementRef
  
  actv?:number

  editCarForm !: FormGroup

  carData : any | null = null
  carId: number = 0
  empDeets: any[] = [];
  options: any[] = []

  constructor(private fmBld : FormBuilder, 
              private rt : ActivatedRoute, 
              private svc: EmployeeService, 
              private rert : Router){
    this.editCarForm = this.fmBld.group({
      id: [this.carId],
      emp_id: ['', Validators.required],
      regno: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required]
    });
  }
//working perfectly
  ngOnInit(){
    const id = parseInt(this.rt.snapshot.paramMap.get('id') || '');

    if(id !== 0){
      this.svc.getVehicle(id)
      .subscribe(data => {
        this.carData = data;
        this.carData = this.carData.data.details;

        this.actv = this.carData.emp_id
        
        this.editCarForm.patchValue(this.carData);
      });
    }

    this.svc.getEmployees().subscribe((data: any)=>{
      this.empDeets = data.data;
      
      for(let i=0;i<this.empDeets.length ;i++){
        this.options.push(this.empDeets[i])
     }
    })
  }

  editCar(){
    if(this.editCarForm.valid){
      const updatedCarData: Vehicle = this.editCarForm.value;
      this.svc.updateVehicle(updatedCarData)
      .subscribe((data)=> {
        alert("Vehicle Details Updated")
        this.rert.navigate(['vehicles']);
      })
    }
  }
}
