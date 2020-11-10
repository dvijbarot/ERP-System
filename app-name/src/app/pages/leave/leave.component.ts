import { Component, OnInit, Injectable, Inject, enableProdMode } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { LeaveService } from './leave.service';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-leave',
  providers: [LeaveService],
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  dataSource: any;
  Type: any;

  constructor(@Inject(HttpClient) httpClient: HttpClient, private config: ConfigModule, private service: LeaveService) {
    this.Type = this.service.getType();
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: ['_id'],
      load:  (loadOptions: any) => {
        return self.service.loadleave().toPromise();
      },
      update: (key, values) => {
        return self.service.updateleave(key, values).toPromise();
      },
      insert: (values) => {
        return self.service.insertleave(values).toPromise();
      }
    });

   }

  ngOnInit() {
  }

}
