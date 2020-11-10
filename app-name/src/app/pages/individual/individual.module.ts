import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualComponent } from './individual.component';
import { IndividualRoutingModule } from './individual-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxTextBoxModule, DxLookupModule, DxPopupModule, DxSelectBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [IndividualComponent],
  imports: [
    DxDataGridModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxTreeListModule,
    DxTabPanelModule,
    DxFormModule,
    DxTextBoxModule,
    DxLookupModule,
    DxPopupModule,
    DxSelectBoxModule,
    CommonModule,
    IndividualRoutingModule
  ]

})
export class IndividualModule { }
