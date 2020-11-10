import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrformComponent } from './hrform.component';
import { HrFormRoutingModule } from './hrform-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxTextBoxModule, DxButtonModule, DxTreeListModule,
  DxTabPanelModule, DxFormModule, DxSelectBoxModule, DxListModule, DxTextAreaModule } from 'devextreme-angular';





@NgModule({
  declarations: [HrformComponent],
  imports: [
    DxDataGridModule,
    DxFileUploaderModule,
    DxTextBoxModule,
    DxButtonModule,
    DxTreeListModule,
    DxTabPanelModule,
    DxFormModule,
    DxSelectBoxModule,
    DxListModule,
    DxTextAreaModule,
    CommonModule,
    HrFormRoutingModule
  ]

})
export class HrFormModule { }
