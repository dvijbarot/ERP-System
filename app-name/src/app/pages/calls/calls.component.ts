import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { CallsService} from '../../shared/services';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss'],
  providers: [CallsService]
})
export class CallsComponent implements OnInit {
  now: Date = new Date();
  CallS: any;
  RemarksList: any;
  Role: any;
  quality: any;
  dataSource: any;
  history: any;
  productlist: any;
  buymatchUR: any;
  buymatchR: any;
  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: CallsService) {
    this.CallS = service.getcalls();
    this.RemarksList = service.getremarks();
    this.Role = service.getrole();
    this.quality = service.getquality();
    this.productlist = service.getprod();
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => {
        return self.service.loadCall().toPromise();
      },
      update: (key, values) => {
        return self.service.uploadData(key, values).toPromise();
      },
      insert: (values) => {
        return self.service.insertData(values).toPromise();
      },
    });
  }
  ngOnInit() {
  }
  LoadMatches(ID: string) {
    const self = this;
    this.buymatchUR = new CustomStore({
      key: 'commodityname',
      load: (loadOptions: any) => self.service.loadDatamatch(ID).toPromise()
    });
  }
  LoadMatchesreg(ID: string) {
    const self = this;
    this.buymatchR = new CustomStore({
      key: 'commodityname',
      load: (loadOptions: any) => self.service.loadDatamatchR(ID).toPromise()
    });
  }
  LoadHistory(ID: string) {
    const self = this;
    this.history = new CustomStore({
      key: 'ClientRef',
      load: (loadOptions: any) => self.service.loadHistoryMatch(ID).toPromise()
    });
  }
  selectionChanged(e) {
    e.component.collapseAll(-1);
    this.LoadHistory(e.key);
    this.LoadMatches(e.key);
    this.LoadMatchesreg(e.key);
  }
  Save(v: string, v1: string, v2: any, v3: any, v5: string, v6: string): any {
    const self = this;
    const data = { CallStatus: v, Remarks: v1, CallOn: v2, TimeOfCall: v3, Notes: v5, ClientRef: v6 };
    self.service.SaveLogs(data).subscribe();
    notify('Registered');
  }
}

