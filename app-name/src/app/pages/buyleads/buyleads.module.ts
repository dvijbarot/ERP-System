import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyleadsRoutingModule } from './buyleads-routing.module';
import { BuyleadsComponent } from './buyleads.component';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxTextBoxModule, DxValidatorModule, DxTagBoxModule, DxSelectBoxModule, DxDateBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [BuyleadsComponent],
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
    DxSelectBoxModule,
    DxDateBoxModule,
    CommonModule,
    BuyleadsRoutingModule
  ],
})
export class BuyleadsModule { }
