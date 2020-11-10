import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { DxFormModule, DxListModule, DxDataGridModule } from 'devextreme-angular';


@NgModule({
  declarations: [LeaveComponent],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    DxFormModule,
    DxListModule,
    DxDataGridModule,
    LeaveRoutingModule
  ]
})
export class LeaveModule { }
