import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosedticketComponent } from './closedticket.component';

const routes: Routes = [{ path: '', component: ClosedticketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedTicketRoutingModule { }
