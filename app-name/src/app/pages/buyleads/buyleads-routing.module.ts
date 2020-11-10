import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyleadsComponent } from './buyleads.component';

const routes: Routes = [{ path: '', component: BuyleadsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyleadsRoutingModule { }
