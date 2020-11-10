import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-savebutton',
  templateUrl: './savebutton.component.html',
  styleUrls: ['./savebutton.component.scss']
})
@Injectable()
export class SavebuttonComponent implements OnInit {
  capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

  click = e => {
    const buttonText = e.component.option('text');
    notify('The ' + this.capitalize(buttonText) + ' button was clicked');
  }
  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    DxButtonModule
  ],
  declarations: [SavebuttonComponent],
  exports: [SavebuttonComponent]
})

export class SavebuttonModule { }
