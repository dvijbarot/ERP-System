import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IconButtonModule } from '../iconbutton/iconbutton.component';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],


})
@Injectable()
export class StatComponent implements OnInit {
  @Input() icon: string;
  @Input() bgClass: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;

  constructor() { }

  ngOnInit() {
  }
}
