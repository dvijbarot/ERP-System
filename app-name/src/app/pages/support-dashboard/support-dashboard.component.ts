import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from 'src/app/shared/components/config/config.module';

@Component({
  selector: 'app-support-dashboard',
  templateUrl: './support-dashboard.component.html',
  styleUrls: ['./support-dashboard.component.scss']
})
export class SupportDashboardComponent implements OnInit {
  newCount: number;
  penCount: number;
  cloCount: number;

  constructor(private httpClient: HttpClient, public router: Router, private config: ConfigModule) { }
  pendingTicket() {
    this.router.navigate(['../pages/pendingtickets']);
  }
  newTicket() {
    this.router.navigate(['../pages/gen-tick-frm']);
  }
  closedTicket() {
    this.router.navigate(['../pages/closedticket']);
  }
  countNew() {
    return this.httpClient.get(this.config.BaseURL + 'countNew');
  }
  countPending() {
    return this.httpClient.get(this.config.BaseURL + 'countPending');
  }
  countClosed() {
    return this.httpClient.get(this.config.BaseURL + 'countClosed');
  }
  ngOnInit() {
    const key = 'count';
    this.countNew().subscribe((res: any[]) => {
      this.newCount = res[key] || 0;
    });
    this.countPending().subscribe((res: any[]) => {
      this.penCount = res[key] || 0;
    });
    this.countClosed().subscribe((res: any[]) => {
      this.cloCount = res[key] || 0;
    });
  }

}
