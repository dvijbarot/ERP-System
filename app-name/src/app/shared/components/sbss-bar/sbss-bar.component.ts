import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { SbssBarService } from './sbss-bar.service';

@Component({
  selector: 'app-sbss-bar',
  templateUrl: './sbss-bar.component.html',
  styleUrls: ['./sbss-bar.component.scss'],
  providers: [SbssBarService]
})
@Injectable()
export class SbssBarComponent implements OnInit {
  dataSource: any[];
  @Input() id: string;
  @Input() title: string;
  @Input() valueField: string;
  @Input() name: string;
  @Input() stack: string;
  @Input() valueField1: string;
  @Input() name1: string;
  @Input() stack1: string;
  @Input() valueField2: string;
  @Input() name2: string;
  @Input() stack2: string;
  @Input() valueField3: string;
  @Input() name3: string;
  @Input() stack3: string;
  @Input() valueField4: string;
  @Input() name4: string;
  @Input() stack4: string;
  @Input() valueField5: string;
  @Input() name5: string;
  @Input() stack5: string;
  @Input() valueAxis: string;
  @Input() state: string;
  @Input() type: string;
  @Input() position: string;
  @Input() columnCount: string;
  @Input() URL: string;
  @Input() customizeItems: string;
  constructor(private service: SbssBarService) { }

  ngOnInit() {
    this.service.getData(this.URL).subscribe(data => this.dataSource = data);
  }

}
@NgModule({
  imports: [

    DxChartModule
  ],
  declarations: [SbssBarComponent],
  bootstrap: [SbssBarComponent],
  exports: [SbssBarComponent]
})
export class SbssBarModule { }

