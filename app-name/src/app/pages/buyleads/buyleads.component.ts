import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from 'src/app/shared/components';
import { BuyleadsService } from 'src/app/shared/services';
import CustomStore from 'devextreme/data/custom_store';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-buyleads',
  templateUrl: './buyleads.component.html',
  styleUrls: ['./buyleads.component.scss'],
  providers: [BuyleadsService]
})

export class BuyleadsComponent implements OnInit {
  now: Date = new Date();

  dataSource: any;
  sellmatch: any;
  sellmatchUR: any;
  history: any;
  CallS: any;
  RemarksList: any;
  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: BuyleadsService) {
    this.CallS = service.getcalls();
    this.RemarksList = service.getremarks();
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => {
        return self.service.loadData().toPromise();
      }

    });
  }
  ngOnInit() {
  }
  LoadMatches(ID: string) {
    const self = this;
    this.sellmatch = new CustomStore({
      key: 'commodityname',
      load: (loadOptions: any) => self.service.loadDatamatch(ID).toPromise()
    });
  }
  LoadMatchesUR(ID: string) {
    const self = this;
    this.sellmatchUR = new CustomStore({
      key: 'commodityname',
      load: (loadOptions: any) => self.service.loadDatamatchUR(ID).toPromise()
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
    this.LoadMatchesUR(e.key);
    this.LoadHistory(e.key);
  }
  Save(v: string, v1: string, v2: any, v3: any, v5: string, v6: string): any {
    const self = this;
    const data = { CallStatus: v, Remarks: v1, CallOn: v2, TimeOfCall: v3, Notes: v5, ClientRef: v6 };
    self.service.SaveLogs(data).subscribe();
    notify('Registered');
  }

}
