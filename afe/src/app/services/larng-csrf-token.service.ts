import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const apiUrl = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class LarngCsrfTokenService {
  
  constructor(private http: HttpClient) { }
  getCsrfToken(){
    return this.http.get<any>(`${apiUrl}/sanctum/csrf-cookie`,
     {withCredentials: true, observe: 'response'})
  }

  login(email: string, password: string){
    return this.http.post<any>(`${apiUrl}/login`,
    {email, password},
    {withCredentials: true, observe: 'response'}).pipe(
      map(result => {
        localStorage.setItem('code', result.statusText);
        return true;
      })
    )
  }

  logout(){

    localStorage.removeItem('code');

    return this.http.post<any>(`${apiUrl}/logout`,
    '',
    {withCredentials: true});
  }

  getUser(){
    return this.http.get<any>(`${apiUrl}/api/user`,
    {withCredentials: true})
  }

  getCode(): boolean {
    return !!localStorage.getItem('code');
  }

}
