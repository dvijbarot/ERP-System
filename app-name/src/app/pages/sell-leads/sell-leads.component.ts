import { Component, OnInit} from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { SellLeadsService } from '../../shared/services/sell-leads.service';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-sell-leads',
  templateUrl: './sell-leads.component.html',
  styleUrls: ['./sell-leads.component.scss'],
  providers: [SellLeadsService]
})
export class SellLeadsComponent implements OnInit {
  now: Date = new Date();
  dataSource: any;
  buymatch: any;
  buymatchUR: any;
  history: any;
  CallS: any;
  RemarksList: any;

  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: SellLeadsService) {
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
    this.buymatch = new CustomStore({
      key: 'commodityname',
      load: (loadOptions: any) => self.service.loadDatamatch(ID).toPromise()
    });
  }
  LoadMatchesUR(ID: string) {
    const self = this;
    this.buymatchUR = new CustomStore({
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
    this.LoadHistory(e.key);
    this.LoadMatchesUR(e.key);
  }
  Save(v: string, v1: string, v2: any, v3: any, v5: string, v6: string): any {
    const self = this;
    const data = { CallStatus: v, Remarks: v1, CallOn: v2, TimeOfCall: v3, Notes: v5, ClientRef: v6 };
    self.service.SaveLogs(data).subscribe();
    notify('Registered');
  }

}
