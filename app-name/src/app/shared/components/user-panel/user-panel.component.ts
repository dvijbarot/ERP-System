import { Component, NgModule, Input, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxListModule } from 'devextreme-angular/ui/list';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';
import {getUserDetails} from '../../services/userdetails.service';
@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

@Injectable()
export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode: string;
  constructor() {}

  setUser(): string {
    return getUserDetails('FirstName') + ' ' + getUserDetails('LastName');
  }
}

@NgModule({
  imports: [
    DxListModule,
    DxContextMenuModule,
    CommonModule
  ],
  declarations: [ UserPanelComponent ],
  exports: [ UserPanelComponent ]
})
export class UserPanelModule { }
