import { NgModule, OnInit, Component, ViewChild, AfterViewInit, enableProdMode, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxPivotGridModule,
  DxPivotGridComponent,
  DxChartModule,
  DxChartComponent
} from 'devextreme-angular';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
@Component({
  selector: 'app-pivotgrid',
  templateUrl: './pivotgrid.component.html',
  styleUrls: ['./pivotgrid.component.scss']
})
@Injectable()
export class PivotgridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class PivotgridModule { }
