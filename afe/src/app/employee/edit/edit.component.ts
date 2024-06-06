import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  editEmpForm !: FormGroup

  empData : any | null = null
  empId: number = 0

  constructor(private fmBld : FormBuilder, 
              private rt : ActivatedRoute, 
              private svc: EmployeeService,
              private rert: Router)
              {
                this.editEmpForm = this.fmBld.group({
                  id: [this.empId],
                  name: ['', Validators.required],
                  email: ['', Validators.required],
                  pfno: ['', Validators.required],
                  designation: ['', Validators.required],
                  department: ['', Validators.required],
                  directorate: ['', Validators.required],
                  mobile: ['',[Validators.required, Validators.maxLength(10)]],
                  altno: ['', Validators.required]
                });
  }

  ngOnInit(){
    const id = parseInt(this.rt.snapshot.paramMap.get('id') || '');
    if(id !== 0){
      this.svc.getEmployee(id)
      .subscribe(data => {
        this.empData = data;
        this.empData = this.empData.data;
        this.editEmpForm.patchValue(this.empData);
      });
    }
  }

  editEmp(){
    if(this.editEmpForm.valid){
      const updatedEmpData: Employee = this.editEmpForm.value;
      console.log('sending updated data')
      this.svc.updateEmployee(updatedEmpData)
      .subscribe((data)=> {
        this.rert.navigate(['employees']);
      })
    }
  }
}
