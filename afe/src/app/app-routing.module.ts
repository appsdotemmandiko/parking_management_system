import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard]},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'parkinglots', loadChildren: () => import('./lot/lot.module').then(m => m.LotModule) },
  { path: 'parkingspots', loadChildren: () => import('./spot/spot.module').then(m => m.SpotModule) },
  { path: 'vehicles', loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule), canActivate: [authGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
