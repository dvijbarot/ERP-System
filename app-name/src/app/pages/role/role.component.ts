import { Component, enableProdMode, Inject, Injectable } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../shared/services/hr.service';
import { ConfigModule } from '../../shared/components/config/config.module';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-role',
  providers: [DataService],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

@Injectable()
export class RoleComponent {

  accesslevel = [
    { accesslevel: '1' },
    { accesslevel: '2' },
    { accesslevel: '3' },
    { accesslevel: '4' },
    { accesslevel: '5' },

  ];

  dataSource: any;
  // accesslevel: string[];

  constructor(@Inject(HttpClient) httpClient: HttpClient, private config: ConfigModule, private service: DataService) {
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: ['_id'],
      load:  (loadOptions: any) => {
        return self.service.loadrole().toPromise();
      },
      update: (key, values) => {
        return self.service.updaterole(key, values).toPromise();
      },
      insert: (values) => {
        return self.service.insertrole(values).toPromise();
      }
    });
  }
}
