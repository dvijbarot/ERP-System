import { Component, OnInit} from '@angular/core';
import { SupportService } from '../../shared/services/support.service';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../shared/services/hr.service';


@Component({
  selector: 'app-gen-tick-frm',
  templateUrl: './gen-tick-frm.component.html',
  styleUrls: ['./gen-tick-frm.component.scss'],
  providers: [SupportService, DataService]
})
export class GenTickFrmComponent implements OnInit {
  stylingMode = 'outlined';
  selectedEntity: any[];
  Department: any;
  ngOnInit() {
    this.service1.getData('getdepartment').subscribe(data => { this.Department = data; });
  }
  constructor(private service: SupportService, private service1: DataService,
              private router: Router, private httpClient: HttpClient) {
  }
  // getdetail
  getDetails(Tel) {
    this.service.getDetails(Tel).subscribe(data => this.selectedEntity = data, err => console.log('HTTP Error', err));
  }

  Generate(v: string, v1: string, v2: string, v3: string, v4: string, v5: string, v6: string): any {
    const self = this;
    const data = {
      prob: v,
      subject: v1,
      desc: v2,
      remarks: v3,
      priority: v4,
      dept: v5,
      Telephone: v6
    };
    notify({
      message: 'You have generated the ticket'
    });
    self.service.Generate(data).subscribe();
  }
}
