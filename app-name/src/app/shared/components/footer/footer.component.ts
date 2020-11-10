import { Component, NgModule, Injectable } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer><ng-content></ng-content></footer>
  `,
  styleUrls: ['./footer.component.scss']
})
@Injectable()
export class FooterComponent {

}

@NgModule({
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
