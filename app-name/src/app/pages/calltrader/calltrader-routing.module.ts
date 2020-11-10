import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalltraderComponent } from './calltrader.component';

const routes: Routes = [{ path: '', component: CalltraderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallTraderRoutingModule { }
