import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellLeadsComponent } from './sell-leads.component';
import { SellLeadsRoutingModule } from './sell-leads-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxTextBoxModule, DxValidatorModule, DxTagBoxModule, DxDateBoxModule, DxSelectBoxModule } from 'devextreme-angular';






@NgModule({
  declarations: [SellLeadsComponent],
  imports: [
    DxDataGridModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxTreeListModule,
    DxTabPanelModule,
    DxFormModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTagBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    CommonModule,
    SellLeadsRoutingModule
  ]

})
export class SellLeadsModule { }
