import { Component, OnInit } from '@angular/core';
import { LarngCsrfTokenService } from '../services/larng-csrf-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  errMsg !: string | null
  usr !:any | null

  constructor(private svc:LarngCsrfTokenService, private router:Router){

  }

  ngOnInit(): void {
    this.svc.getUser().subscribe({
    next: res =>   this.usr = res,
    error: err => this.errMsg = err.error});
  }

  lodgeOut(){

    localStorage.removeItem('code');

    this.svc.logout().subscribe({
      next: res => this.router.navigate(['/login']),
      error: err => this.errMsg = err
    })
  }
  
}
