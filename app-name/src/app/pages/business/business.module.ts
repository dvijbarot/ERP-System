import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxTextBoxModule, DxValidatorModule, DxTagBoxModule } from 'devextreme-angular';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';



@NgModule({
  declarations: [BusinessComponent],
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
    BusinessRoutingModule,
    CommonModule
  ]
})
export class BusinessModule { }
