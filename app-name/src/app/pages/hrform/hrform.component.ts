import {  Component, enableProdMode, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../shared/services/hr.service';
import { ConfigModule } from '../../shared/components/config/config.module';
import { getUserDetails } from '../../shared/services/userdetails.service';


import notify from 'devextreme/ui/notify';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-hrform',
  templateUrl: './hrform.component.html',
  providers: [DataService],
  styleUrls: ['./hrform.component.scss']
})

export class HrformComponent implements OnInit {

  dataSource: any;
  role: any;
  department: any;
  employee: any;
  docType: any;
  countries: any;
  uploaded: any;
  key: any;
  Uid: any;

  ngOnInit() {
    this.service.getData('getrole').subscribe(data => { this.role = data; });
    this.service.getData('getdepartment').subscribe(data => { this.department = data; });
    this.service.getData('getemployee').subscribe(data => { this.employee = data; });
  }

  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: DataService) {
    this.setUser();
    this.docType = this.service.getDocType();
    this.countries = this.service.getCountries();
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => {
        return self.service.loademployee().toPromise();
      },
      update: (key, values) => {
        return self.service.updateemployee(key, values).toPromise();
      },
      insert: (values) => {
        const Username = getUserDetails('Username');
        const Uid = self.service.getId(Username);
        return self.service.insertemployee(values, self.key, this.Uid).toPromise();
      }
    });
  }
  setUser(): string {
    return getUserDetails('Username');
  }
  setUserId(Username) {
    const self = this;
    console.log(Username);
  }

  Upload(v: string, v2: string, v3: object, v4: string): any {

    const file = v3[0];
    const reader = new FileReader();
    const self = this;
    reader.readAsDataURL(file);
    reader.onload = (D => {
      const data = reader.result;
      const filename = file.name;
      const data1 = { file: data, D1: v2, D2: v, filename, Des: v4 };
      self.service.Docs(data1).subscribe();

    });
    notify('Document Uploaded');
  }
  Uploadeds(ID: string) {
    const self = this;
    this.uploaded = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => self.service.showuploadedDocs(ID).toPromise()
    });
  }
  selectionChanged(e) {
    const self = this;
    e.component.collapseAll(-1);
    this.Uploadeds(e.key);
    self.key = e.key;
  }
}

