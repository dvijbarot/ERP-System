import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleComponent } from './role.component';
import { RoleRoutingModule } from './role-routing.module';
import { DxDataGridModule, DxFileUploaderModule, DxButtonModule, DxTreeListModule, DxTabPanelModule,
  DxFormModule, DxSelectBoxModule, DxListModule, DxTextAreaModule } from 'devextreme-angular';





@NgModule({
  declarations: [RoleComponent],
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
    RoleRoutingModule
  ]

})
export class RoleModule { }
