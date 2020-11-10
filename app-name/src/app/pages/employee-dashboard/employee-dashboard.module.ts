import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { EmployeeDashboardRoutingModule } from './employee-deshboard-routing.module';


@NgModule({
  declarations: [EmployeeDashboardComponent],
  imports: [

    CommonModule,
    EmployeeDashboardRoutingModule
  ]

})
export class EmployeeDashboardModule { }
