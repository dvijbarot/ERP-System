import { Component, Injectable, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { SupportService } from '../../shared/services/support.service';
import { DataService } from '../../shared/services/hr.service';
import { getUserDetails } from '../../shared/services/userdetails.service';

@Component({
  selector: 'app-pendingtickets',
  templateUrl: './pendingtickets.component.html',
  styleUrls: ['./pendingtickets.component.scss'],
  providers: [DataService, SupportService]
})
@Injectable()
export class PendingticketsComponent implements OnInit {
  ticketData: any;
  activityData: any;
  Department: any;
  completedValue: string;
  key: any;
  entityID: any;
  Username: any;
  empDept: any;
  filterValue: any;

  ngOnInit() {
    this.service1.getData('getdepartment').subscribe(data => { this.Department = data; });
  }
  constructor(private httpClient: HttpClient, private config: ConfigModule,
              private service: SupportService, private service1: DataService) {

    const Username = getUserDetails('Username');
    const empDept = getUserDetails('Department');
    console.log(empDept);
    this.filterValue = [
      ['Department', '=', empDept],
  ];
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';

    }
    this.ticketData = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => {
        return httpClient.get(this.config.BaseURL + 'showPending')
          .toPromise()
          .then((data: any) => {
            return data;
          })
          .catch(error => { throw new Error('Data Loading Error'); });
      },
      update: (key, values) => {
        const entityID = this.ticketData.entityID;
        return this.service.updateTicket(key, entityID, values).toPromise();
      },
    });
  }
  Test(ID: string) {
    const self = this;
    const Username = getUserDetails('Username');
    console.log(Username);
    this.activityData = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => self.service.ShowActivity(ID).toPromise(),
      insert: (values) => self.service.addActivity(values, self.key, self.Username).toPromise()
    });
  }
  selectionChanged(e) {
    const self = this;
    e.component.collapseAll(-1);
    self.Test(e.key);
    self.key = e.key;
  }
}
