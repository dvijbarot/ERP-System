import { Component, enableProdMode, Input, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { BusinessService } from '../../shared/services/business.service';
import notify from 'devextreme/ui/notify';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  providers: [BusinessService]
})
export class BusinessComponent implements OnInit {
  nature: any;
  dataSource: any;
  tradingas: any;
  entype: any;
  countries: any;
  verif: any;
  UploadedDoc: any;
  @Input() Userid: string;
  values: any = {};
  constructor(private httpClient: HttpClient, private config: ConfigModule, private service: BusinessService) {
    this.nature = service.getnature();
    this.tradingas = service.gettrading();
    this.entype = service.getentype();
    this.countries = service.getcountries();
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    const self = this;
    this.dataSource = new CustomStore({
      key: '_id',
      load: (loadOptions: any) =>  {
        return self.service.loadData().toPromise();
      },
      update: (key, values) => {
        return self.service.uploadData(key, values).toPromise();

      },
      insert:  (values)  =>  {

        return self.service.insertData(values).toPromise();
      },
    });

  }
  ngOnInit() { }


  Test(ID: string) {
    const self = this;
    this.verif = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => self.service.showUploadedDocs(ID).toPromise()
    });
  }
  onCellPrepared(e) {
    if (e.column.dataField === 'Status') {
      {
        if (e.data.Status === 'Pending') {
          e.cellElement.style.color = '#CC3300';
        } else { if (e.data.Status === 'Verified') {
            e.cellElement.style.color = '#228B22';
          }
        }
      }
    }
  }
  selectionChanged(e) {
    e.component.collapseAll(-1);
    this.Test(e.key);
  }


  Upload(v: string, v2: string, v3: object): any {
    const file = v3[0];
    const reader = new FileReader();
    const self = this;
    reader.readAsDataURL(file);
    reader.onload = (D => {
      const data = reader.result;
      const data1 = { file: data, D1: v2, D2: v };
      self.service.UploadDoc(data1).subscribe();
    });
    notify('Document Uploaded');

  }
}


