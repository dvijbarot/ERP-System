import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingticketsComponent } from './pendingtickets.component';
import { PendingTicketsRoutingModule } from './pendingtickets-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxSpeedDialActionModule, DxTextBoxModule } from 'devextreme-angular';
import { IconButtonModule } from 'src/app/shared/components';




@NgModule({
  declarations: [PendingticketsComponent],
  imports: [
    DxDataGridModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxTextBoxModule,
    DxTreeListModule,
    DxTabPanelModule,
    DxFormModule,
    DxSpeedDialActionModule,
    IconButtonModule,
    CommonModule,
    PendingTicketsRoutingModule
  ]

})
export class PendingticketModule { }
