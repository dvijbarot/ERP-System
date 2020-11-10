import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingticketsComponent } from './pendingtickets.component';

const routes: Routes = [{ path: '', component: PendingticketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingTicketsRoutingModule { }
