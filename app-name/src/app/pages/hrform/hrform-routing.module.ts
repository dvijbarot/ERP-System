import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrformComponent } from './hrform.component';

const routes: Routes = [{ path: '', component: HrformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrFormRoutingModule { }
