import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RentComponent } from './rent/rent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Step1SelectStationComponent } from './rent/step1-select-station/step1-select-station.component';
import { Step2SelectDateComponent } from './rent/step2-select-date/step2-select-date.component';
import { Step3SelectVehicleComponent } from './rent/step3-select-vehicle/step3-select-vehicle.component';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarComponent } from './rent/step2-select-date/calendar/calendar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FotterComponent } from './fotter/fotter.component';
import { MapComponent } from './rent/step1-select-station/map/map.component';
import { SliderStationComponent } from './rent/step1-select-station/slider-station/slider-station.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmingPagComponent } from './admin-pag/admin-pag.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminVehicleComponent } from './admin-vehicle/admin-vehicle.component';
import { AllVehiclesComponent } from './admin-vehicle/all-vehicles/all-vehicles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { Step4PaymentComponent } from './rent/step4-payment/step4-payment.component';
import { AdminLeftNavbarComponent } from './admin-left-navbar/admin-left-navbar.component';
import { MatSortModule } from '@angular/material/sort';
import { AggVehiclesComponent } from './admin-vehicle/agg-vehicles/agg-vehicles.component';
import { MapVehiclesComponent } from './admin-vehicle/map-vehicles/map-vehicles.component';
import { AdminStationComponent } from './admin-station/admin-station.component';
import { AllStationComponent } from './admin-station/all-station/all-station.component';
import { AggStatioComponent } from './admin-station/agg-statio/agg-statio.component';
import { InformationRentComponent } from './rent/information-rent/information-rent.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environments';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { GetCarComponent } from './user-profile/get-car/get-car.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AllUserComponent } from './admin-user/all-user/all-user.component';
import { ReservasUserComponent } from './admin-user/reservas-user/reservas-user.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StationStatsComponent } from './admin-station/station-stats/station-stats.component';
import { EditVehicleComponent } from './admin-vehicle/edit-vehicle/edit-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    RentComponent,
    Step1SelectStationComponent,
    Step2SelectDateComponent,
    Step3SelectVehicleComponent,
    ProgressStepperComponent,
    CalendarComponent,
    FotterComponent,
    MapComponent,
    SliderStationComponent,
    AdmingPagComponent,
    AdminNavbarComponent,
    AdminVehicleComponent,
    AdminNavbarComponent,
    AllVehiclesComponent,
    Step4PaymentComponent,
    AdminLeftNavbarComponent,
    AggVehiclesComponent,
    MapVehiclesComponent,
    AdminStationComponent,
    AllStationComponent,
    AggStatioComponent,
    InformationRentComponent,
    UserProfileComponent,
    GetCarComponent,
    AdminUserComponent,
    AllUserComponent,
    ReservasUserComponent,
    StationStatsComponent,
    EditVehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatNativeDateModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireStorageModule, 
    ZXingScannerModule,
    NgxChartsModule,
    //Debe configurar el módulo de almacenamiento de Firebase
    //provideFirebaseApp(() => initializeApp({"projectId":"XXXXXX","appId":"XXXXXXXXX","storageBucket":"XXXXXXXX","apiKey":"XXXXXX","authDomain":"XXXXXXX","messagingSenderId":"XXXXXXXXX","measurementId":"XXXXXXXX"})),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideClientHydration(),
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
