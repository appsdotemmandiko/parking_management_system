import { Component, OnInit } from '@angular/core';
import { LarngCsrfTokenService } from './services/larng-csrf-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'KUTRRH Parking';
  sidebarToggleMenu = true;
  
constructor(private tSrvc: LarngCsrfTokenService){}

  ngOnInit(): void {
    
    this.tSrvc.getCsrfToken().subscribe(() => console.log('Csrf'))

  }

  toggleSidebar(){
    this.sidebarToggleMenu = this.sidebarToggleMenu ? false : true;
  }
  
}
