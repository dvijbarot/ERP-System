import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxTextBoxModule, DxValidatorModule, DxTagBoxModule, DxCheckBoxModule,
  DxDateBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { CalltraderComponent } from './calltrader.component';
import { CallTraderRoutingModule } from './calltrader-routing.module';

@NgModule({
  declarations: [CalltraderComponent],
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
    DxSelectBoxModule,
    DxDateBoxModule,
    CallTraderRoutingModule,
    CommonModule
  ]
})
export class CallTraderModule { }
