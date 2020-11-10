import { NgModule, Component, Input, Injectable } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { GridService } from './grid.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [GridService]
})
@Injectable()
export class GridComponent {
  dataSource: any[];
  @Input() id: string;
  @Input() columns: any[];
  @Input() URL: string;
  constructor(private service: GridService) { }
  ngOnInit() {
    this.service.getData(this.URL).subscribe(data => this.dataSource = data);
  }
}
@NgModule({
  imports: [
    DxDataGridModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent],
  bootstrap: [GridComponent]

})
export class GridModule { }

