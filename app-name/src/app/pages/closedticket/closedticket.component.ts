import { Component, Injectable } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { SupportService } from '../../shared/services/support.service';

@Component({
  selector: 'app-closedticket',
  templateUrl: './closedticket.component.html',
  styleUrls: ['./closedticket.component.scss'],
  providers: [SupportService]
})
@Injectable()
export class ClosedticketComponent {
  closedTicks: any;
  activityData: any;
  priority: any[];

  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: SupportService) {
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    this.closedTicks = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => {
        return httpClient.get(this.config.BaseURL + 'showClosed')
          .toPromise()
          .then((data: any) => {
            return data;
          })
          .catch(error => { throw new Error('Data Loading Error'); });
      }
    });
  }
  Test(ID: string) {
    this.activityData = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => this.service.ShowAc(ID).toPromise()
     });
  }
    selectionChanged(e) {
      e.component.collapseAll(-1);
      this.Test(e.key);
    }
}
