import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallsComponent } from './calls.component';
import { CallsRoutingModule } from './calls-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxTextBoxModule, DxValidatorModule, DxTagBoxModule,
  DxCheckBoxModule, DxDateBoxModule, DxSelectBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [CallsComponent],
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
    DxCheckBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    CallsRoutingModule,
    CommonModule
  ]
})
export class CallsModule { }
