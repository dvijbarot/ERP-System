import { Component, OnInit, NgModule, Input, Injectable } from '@angular/core';
import { DxTooltipModule, DxTemplateModule } from 'devextreme-angular';
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
@Injectable()
export class TooltipComponent implements OnInit {
  @Input() target: string;
  defaultVisible = false;
    withTemplateVisible = false;
    withAnimationVisible = false;

    toggleDefault() {
        this.defaultVisible = !this.defaultVisible;
    }

    toggleWithTemplate() {
        this.withTemplateVisible = !this.withTemplateVisible;
    }

    toggleWithAnimation() {
        this.withAnimationVisible = !this.withAnimationVisible;
    }
  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
  imports: [
      DxTooltipModule,
      DxTemplateModule
  ],
  declarations: [TooltipComponent],
  exports: [TooltipComponent]
})
export class TooltipModule { }
