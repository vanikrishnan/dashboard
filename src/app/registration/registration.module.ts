import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  declarations: [LandingpageComponent, AdminregistrationComponent]
})
export class RegistrationModule { }
