import { Component, enableProdMode, Input, Inject, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { IndividualService } from '../../shared/services/individual.service';
import notify from 'devextreme/ui/notify';



if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-individual',
  templateUrl: 'individual.component.html',
  styleUrls: ['./individual.component.scss'],
  providers: [IndividualService]
})
export class IndividualComponent implements OnInit {
  // @ViewChild(DxFormComponent,{static:false}) form: DxFormComponent
  dataSource: any;
  positions: any;
  productlist: any;
  docs: any;
  countries: any;
  uploaded: any;
  @Input() Userid: string;
  values: any = {};
  constructor(@Inject(HttpClient) httpClient: HttpClient, private config: ConfigModule, private service: IndividualService) {

    this.positions = service.getpositions();
    this.productlist = service.getprod();
    this.docs = service.getdocs();
    this.countries = service.getcountries();
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }

    const self = this;
    this.dataSource = new CustomStore({
      key: '_id',
      load:  (loadOptions: any) => {
        return self.service.loadData().toPromise();
      },
      update: (key, values) => {
        return self.service.uploadData(key, values).toPromise();
      },
      insert:  (values) => {
        return self.service.insertData(values).toPromise();
      },

    });
  }
  ngOnInit() { }

  selectionChanged(e) {
    e.component.collapseAll(-1);
    this.Uploaded(e.key);
  }

  onCellPrepared(e) {
    if (e.column.dataField === 'v') {
      {
        if (e.data.v === '') {
          return 'NotUploaded';
        }
      }
    }
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
  Uploaded(ID: string) {
    const self = this;
    this.uploaded = new CustomStore({
      key: '_id',
      load: (loadOptions: any) => self.service.showUploadedDocs(ID).toPromise()
    });
  }
}
