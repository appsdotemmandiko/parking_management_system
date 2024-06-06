import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LarngCsrfTokenService } from '../services/larng-csrf-token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  errMsg !:string | null
  loginFrm !:FormGroup
  redirectUrl: any = ''

  constructor(
    private svc:LarngCsrfTokenService, 
    private router:Router, 
    private fBld: FormBuilder,
    private actvRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.loginFrm = this.fBld.group({email: [''], password: ['']})
    this.redirectUrl = this.actvRoute.snapshot.queryParamMap.get('redirectUrl') || '/'
  }

  lodge(){
    
    let {email, password} = this.loginFrm.value

    this.svc.login(email, password).subscribe({
      next: res => {this.router.navigateByUrl(this.redirectUrl)},
      error: err => this.errMsg = err
    })
  }
}
