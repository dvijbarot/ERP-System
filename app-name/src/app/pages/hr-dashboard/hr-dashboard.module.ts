import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrDashboardRoutingModule } from './hr-dashboard-routing.module';
import { HrDashboardComponent } from './hr-dashboard.component';
import { PieChartModule, BarChartModule, MultiDoughnutModule } from 'src/app/shared/components';


@NgModule({
    declarations: [HrDashboardComponent],
    imports: [
        CommonModule,
        HrDashboardRoutingModule,
        BarChartModule,
        PieChartModule,
        MultiDoughnutModule
    ]
})
export class HrDashboardModule { }
