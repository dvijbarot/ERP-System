import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxPieChartModule } from 'devextreme-angular';
import { PieService } from './pie-chart.service';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  providers: [PieService]
})
@Injectable()
export class PieChartComponent implements OnInit {
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
  @Input() extension: string;
  constructor(private service: PieService) { }
  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }
  legendClickHandler(e) {
    const arg = e.target,
      item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }
  customizeLabel(arg) {
    return arg.valueText + arg.argumentText;
  }

  toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

  customizeTooltip(arg) {
    return { text: arg.argumentText + '<br>' + arg.seriesName + ':' + arg.valueText + 'kg' };
  }

  ngOnInit() {
    this.service.getData(this.URL).subscribe(data => this.dataSource = data);
  }

}
@NgModule({
  imports: [DxPieChartModule],
  declarations: [PieChartComponent],
  exports: [PieChartComponent]
})

export class PieChartModule { }

