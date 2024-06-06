import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { Spot } from '../models/spot';
import { Lot } from '../models/lot';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  getCsrfToken(){
    return this.httpClient.get<any>(`${this.apiUrl}/sanctum/csrf-cookie`,
     {withCredentials: true, observe: 'response'})
  }

  //API Methods -- id?
  //POST - 1 employee
  createEmployee(emp: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.apiUrl}/api/employees`, emp, {withCredentials: true});
  }

   //POST - 1 car
   createCar(car: Vehicle): Observable<Vehicle>{
    return this.httpClient.post<Vehicle>(`${this.apiUrl}/api/vehicles`, car, {withCredentials: true});
  }

  //POST - 1 parking lot
  createLot(lot: Lot): Observable<Lot>{
    return this.httpClient.post<Lot>(`${this.apiUrl}/api/parkinglots`, lot, {withCredentials: true});
  } 
  
  //POST - 1 parking spot
   createSpot(spot: Spot): Observable<Spot>{
    return this.httpClient.post<Spot>(`${this.apiUrl}/api/parkingspots`, spot, {withCredentials: true});
  }
  //GET - * employees
  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/api/employees`,
    {withCredentials: true}
    );
  }

  //GET - * vehicles
  getVehicles(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.apiUrl}/api/vehicles`,
    {withCredentials: true}
    );
  }

  //GET - * parking lots
  getLots(): Observable<Lot[]>{
    return this.httpClient.get<Lot[]>(`${this.apiUrl}/api/parkinglots`,
    {withCredentials: true}
    );
  } 
  
  //GET - * parking spots
   getSpots(): Observable<Spot[]>{
    return this.httpClient.get<Spot[]>(`${this.apiUrl}/api/parkingspots`,
    {withCredentials: true}
    );
  }

  //GET - 1 employee
  getEmployee(id: Number): Observable<Employee> {
    const url = `${this.apiUrl}/api/employees/${id}`;
    return this.httpClient.get<Employee>(url, {withCredentials: true});
    
  }

   //GET - 1 car
   getVehicle(id: Number): Observable<Vehicle> {
    const url = `${this.apiUrl}/api/vehicles/${id}`;
    return this.httpClient.get<Vehicle>(url, {withCredentials: true});
    
  }

  //Get - 1 Parking lot
  getLot(id: Number): Observable<Lot>{
    const url = `${this.apiUrl}/api/parkinglots/${id}`;
    return this.httpClient.get<Lot>(url, {withCredentials: true});
  }

   //Get - 1 spot
   getSpot(id: Number): Observable<Spot>{
    const url = `${this.apiUrl}/api/parkingspots/${id}`;
    return this.httpClient.get<Spot>(url, {withCredentials: true});
  }

  //Update Employee
  updateEmployee(emp: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/api/employees/${emp.id}`;
    return this.httpClient.put<Employee>(url, emp, {withCredentials: true});
  }

  //Update Car Details
  updateVehicle(car: Vehicle): Observable<Vehicle> {
    const url = `${this.apiUrl}/api/vehicles/${car.id}`;
    return this.httpClient.put<Vehicle>(url, car, {withCredentials: true});
  }

  //Update Parking Lot Details
  updateLot(lot: Lot): Observable<Lot> {
    const url = `${this.apiUrl}/api/parkinglots/${lot.id}`;
    return this.httpClient.put<Lot>(url, lot, {withCredentials: true});
  }

  //Update Parking Spot Details
  updateSpot(spot: Spot): Observable<Spot> {
    const url = `${this.apiUrl}/api/parkingspots/${spot.id}`;
    return this.httpClient.put<Spot>(url, spot, {withCredentials: true});
  }

  // Delete Employee
  deleteEmployee(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url, {withCredentials: true});
  }

 
}
