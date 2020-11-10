import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedticketComponent } from './closedticket.component';
import { ClosedTicketRoutingModule } from './closedticket-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule,
  DxTreeListModule, DxTabPanelModule, DxFormModule } from 'devextreme-angular';
import { IconButtonModule } from 'src/app/shared/components';

@NgModule({
  declarations: [ClosedticketComponent],
  imports: [
    DxDataGridModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxTreeListModule,
    DxTabPanelModule,
    DxFormModule,
    CommonModule,
    IconButtonModule,
    ClosedTicketRoutingModule
  ]
})
export class ClosedticketModule { }
