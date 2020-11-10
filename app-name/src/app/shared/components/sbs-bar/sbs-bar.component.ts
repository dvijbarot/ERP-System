import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { SbsBarService } from './sbs-bar.service';

@Component({
  selector: 'app-sbs-bar',
  templateUrl: './sbs-bar.component.html',
  styleUrls: ['./sbs-bar.component.scss'],
  providers: [SbsBarService]
})
@Injectable()
export class SbsBarComponent implements OnInit {
  dataSource: any[];
  @Input() id: string;
  @Input() title: string;
  @Input() argumentField: string;
  @Input() valueField: string;
  @Input() name: string;
  @Input() valueField1: string;
  @Input() name1: string;
  @Input() valueField2: string;
  @Input() name2: string;
  @Input() type: string;
  @Input() color: string;
  @Input() URL: string;
  constructor(private service: SbsBarService) { }

  ngOnInit() {
    this.service.getData(this.URL).subscribe(data1 => this.dataSource = data1);
  }
  onPointClick(e) {

  }

}
@NgModule({
  imports: [DxChartModule],
  declarations: [SbsBarComponent],
  bootstrap: [SbsBarComponent],
  exports: [SbsBarComponent]
})

export class SbsBarModule { }
