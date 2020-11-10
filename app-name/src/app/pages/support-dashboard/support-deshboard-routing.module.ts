import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportDashboardComponent } from './support-dashboard.component';

const routes: Routes = [{ path: '', component: SupportDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportDashboardRoutingModule { }
