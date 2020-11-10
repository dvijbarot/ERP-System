import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenTickFrmComponent } from './gen-tick-frm.component';
import { GenTickFrmRoutingModule } from './gen-tick-frm-routing.module';
import { IconButtonModule } from 'src/app/shared/components';
import { DxLookupModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule, DxButtonModule,
  DxFileUploaderModule, DxTemplateModule, DxCheckBoxModule, DxTextBoxModule, DxDateBoxModule,
  DxValidatorModule, DxValidationSummaryModule } from 'devextreme-angular';





@NgModule({
  declarations: [GenTickFrmComponent],
  imports: [
    IconButtonModule,
    DxLookupModule,
    DxFormModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxButtonModule,
    DxFileUploaderModule,
    DxTemplateModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    CommonModule,
    GenTickFrmRoutingModule
  ]

})
export class GenTickFrmModule { }
