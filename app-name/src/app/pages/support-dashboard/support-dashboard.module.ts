import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportDashboardComponent } from './support-dashboard.component';
import { SupportDashboardRoutingModule } from './support-deshboard-routing.module';
import { IconButtonModule, BarChartModule, MultiDoughnutModule, PieChartModule } from 'src/app/shared/components';
import { StatModule } from 'src/app/shared/components/stat/stat.module';
import { DxResponsiveBoxModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [SupportDashboardComponent],
  imports: [
    IconButtonModule,
    CommonModule,
    SupportDashboardRoutingModule,
    DxResponsiveBoxModule,
    DxSelectBoxModule,
    PieChartModule,
    BarChartModule,
    MultiDoughnutModule,
    StatModule
  ]

})
export class SupportDashboardModule { }
