import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';


@Component({
  selector: 'app-iconbutton',
  templateUrl: './iconbutton.component.html',
  styleUrls: ['./iconbutton.component.scss']
})
@Injectable()
export class IconbuttonComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() text: string;
  @Input() height: string;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
  imports: [DxButtonModule],
  declarations: [IconbuttonComponent],
  exports: [IconbuttonComponent]
})

export class IconButtonModule { }
