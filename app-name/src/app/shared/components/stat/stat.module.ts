import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonModule } from '../iconbutton/iconbutton.component';


@NgModule({
  imports: [CommonModule, MatCardModule, MatIconModule, IconButtonModule],
  declarations: [StatComponent],
  exports: [StatComponent]
})
export class StatModule { }
