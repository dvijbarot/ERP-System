import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from 'src/app/shared/components';
import { SalesService } from './sales-dashboard.service';


@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss'],
  providers: [SalesService]
})
export class SalesDashboardComponent implements OnInit {
  TodayDate = new Date().toLocaleDateString();
  countBl: number;
  countSl: number;
  countCall: number;
  countCalled: number;
  productlist: any;
  graphData: any[];

  isShown = true;

  constructor(private httpClient: HttpClient, private config: ConfigModule,
              private service: SalesService) {
    this.productlist = service.getprod();
  }
  Base = this.config.BaseURL;
  Commodity = 'Almond';
  ngOnInit() {
    const key = 'count';
    this.get_blcount().subscribe((res: any[]) => {
      this.countBl = res[key] || 0;
    });
    this.get_slcount().subscribe((res: any[]) => {
      this.countSl = res[key] || 0;
    });
    this.get_countcalls().subscribe((res: any[]) => {
      this.countCall = res[key] || 0;
    });
    // this.get_called().subscribe((res: any[]) => {
    //   this.countCalled = res[key] || 0;
    // });
  }

  get_blcount() {
    return this.httpClient.get(this.config.BaseURL + 'bcount');
  }
  get_slcount() {
    return this.httpClient.get(this.config.BaseURL + 'scount');
  }
  get_countcalls() {
    return this.httpClient.get(this.config.BaseURL + 'calls');
  }
  // get_called() {
  //   return this.httpClient.get(this.config.BaseURL + 'Ncalled');
  // }
  selectionChanged(e) {
    e.component.collapseAll(-1);
  }
  getGraph(commodityname): any {
    this.Commodity = commodityname;
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    });
  }

}
