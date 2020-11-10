import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesDashboardRoutingModule } from './sales-dashboard-routing.module';
import { SalesDashboardComponent } from './sales-dashboard.component';
import { StatModule } from 'src/app/shared/components/stat/stat.module';
import { DxResponsiveBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { PieChartModule, BarChartModule } from 'src/app/shared/components';


@NgModule({
  declarations: [SalesDashboardComponent],
  imports: [
    CommonModule,
    SalesDashboardRoutingModule,
    StatModule,
    DxResponsiveBoxModule,
    PieChartModule,
    DxSelectBoxModule,
    BarChartModule,
  ]
})
export class SalesDashboardModule { }
