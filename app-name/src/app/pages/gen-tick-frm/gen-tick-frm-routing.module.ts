import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenTickFrmComponent } from './gen-tick-frm.component';

const routes: Routes = [{ path: '', component: GenTickFrmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenTickFrmRoutingModule { }
