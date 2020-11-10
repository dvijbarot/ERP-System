import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { BarchartService } from './barchart.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
  providers: [BarchartService]
})

@Injectable()
export class BarchartComponent implements OnInit {
  dataSource: any[];
  @Input() argumentField: string;
  @Input() id: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() valueField: string;
  @Input() name: any;
  @Input() type: string;
  @Input() color: string;
  @Input() URL: string;
  @Input() Param: any;
  @Input() palette: string;
  constructor(private service: BarchartService) { }
  ngOnInit() {

    this.service.getData(this.URL, this.Param).subscribe(data => this.dataSource = data);
  }
}

@NgModule({
  imports: [DxChartModule],
  declarations: [BarchartComponent],
  exports: [BarchartComponent]
})

export class BarChartModule { }
