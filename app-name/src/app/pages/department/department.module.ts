import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentComponent } from './department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxSelectBoxModule, DxListModule, DxTextAreaModule } from 'devextreme-angular';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    DxDataGridModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxTreeListModule,
    DxTabPanelModule,
    DxFormModule,
    DxSelectBoxModule,
    DxListModule,
    DxTextAreaModule,
    CommonModule,
    DepartmentRoutingModule
  ]

})
export class DepartmentModule { }
