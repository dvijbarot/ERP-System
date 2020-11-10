import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellLeadsComponent } from './sell-leads.component';

const routes: Routes = [{ path: '', component: SellLeadsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellLeadsRoutingModule { }
