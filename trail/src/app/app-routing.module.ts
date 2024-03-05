import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RentComponent } from './rent/rent.component';
import { AdmingPagComponent } from './admin-pag/admin-pag.component';
import { AdminVehicleComponent } from './admin-vehicle/admin-vehicle.component';
import { AdminLeftNavbarComponent } from './admin-left-navbar/admin-left-navbar.component';
import { AdminStationComponent } from './admin-station/admin-station.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GetCarComponent } from './user-profile/get-car/get-car.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { EditVehicleComponent } from './admin-vehicle/edit-vehicle/edit-vehicle.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path: 'rent', component: RentComponent},
  {path: 'admin', component: AdmingPagComponent},
  {path: 'admin-vehicle', component: AdminVehicleComponent, children: [
    {path: 'edit/:id', component: EditVehicleComponent},
    
  ]},
  {path: 'admin-left-navbar', component: AdminLeftNavbarComponent},
  {path: 'admin-station', component: AdminStationComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'get-car', component: GetCarComponent},
  {path: 'admin-user', component: AdminUserComponent},
  { path: '', component: LandingPageComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
