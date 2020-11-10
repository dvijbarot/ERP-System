import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { CalltraderService } from '../../shared/services/calltrader.service';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-calltrader',
  templateUrl: './calltrader.component.html',
  styleUrls: ['./calltrader.component.scss'],
  providers: [CalltraderService]
})
export class CalltraderComponent implements OnInit {
  now: Date = new Date();
  CallS: any;
  RemarksList: any;
  sellmatchUR: any;
  sellmatchR: any;
  Role: any;
  quality: any;
  dataSource: any;
  productlist: any;
  history: any;
  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: CalltraderService) {
    this.CallS = service.getcalls();
    this.RemarksList = service.getremarks();
    this.productlist = service.getprod();
    this.Role = service.getrole();
    this.quality = service.getquality();
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
    this.sellmatchUR = new CustomStore({
      key: 'commodityname',
      load: (loadOptions: any) => self.service.loadDatamatch(ID).toPromise()
    });
  }
  LoadMatchesreg(ID: string) {
    const self = this;
    this.sellmatchR = new CustomStore({
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
    this.LoadMatches(e.key);
    this.LoadMatchesreg(e.key);
    this.LoadHistory(e.key);
  }
  Save(v: string, v1: string, v2: any, v3: any, v5: string, v6: string): any {
    const self = this;
    const data = { CallStatus: v, Remarks: v1, CallOn: v2, TimeOfCall: v3, Notes: v5, ClientRef: v6 };
    self.service.SaveLogs(data).subscribe();
    notify('Registered');
  }
}
