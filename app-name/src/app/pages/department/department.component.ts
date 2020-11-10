import { Component, enableProdMode, Inject, Injectable } from '@angular/core';

import CustomStore from 'devextreme/data/custom_store';
import { DataService } from '../../shared/services/hr.service';

import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  providers: [DataService],
  styleUrls: ['./department.component.scss']
})
@Injectable()
export class DepartmentComponent {

  dataSource: any;

  constructor(@Inject(HttpClient) httpClient: HttpClient, private config: ConfigModule, private service: DataService) {
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: ['_id'],
      load:  (loadOptions: any) => {
        return self.service.loaddepartment().toPromise();
      },
      update: (key, values) => {
        return self.service.updatedepartment(key, values).toPromise();
      },
      insert: (values) => {
        return self.service.insertdepartment(values).toPromise();
      }
    });
  }
}
