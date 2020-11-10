import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxPieChartModule } from 'devextreme-angular';
import { MultiDoughnutService } from '../multi-doughnut/multi-doughnut.service';
@Component({
  selector: 'app-multi-doughnut',
  templateUrl: './multi-doughnut.component.html',
  styleUrls: ['./multi-doughnut.component.scss'],
  providers: [MultiDoughnutService]
})
@Injectable()
export class MultiDoughnutComponent implements OnInit {
  dataSource: any[];
  @Input() title: string;
  @Input() id: string;
  @Input() palette: string;
  @Input() type: string;
  @Input() name: string;
  @Input() argumentField: string;
  @Input() valueField: string;
  @Input() nme: string;
  @Input() argField1: string;
  @Input() valField1: string;
  @Input() subtitle: string;
  @Input() innerRadius: string;
  @Input() URL: string;
  @Input() format: string;

  constructor(private service: MultiDoughnutService) { }

  customizeTooltip(arg) {
    return { text: arg.argumentText + '<br>' + arg.seriesName + ':'  + arg.valueText + 'B' };
  }


  ngOnInit() {
    this.service.getData(this.URL).subscribe(data => this.dataSource = data);
  }

}

@NgModule({
  imports: [
    DxPieChartModule
  ],
  declarations: [MultiDoughnutComponent],
  exports: [MultiDoughnutComponent]
})
export class MultiDoughnutModule { }
