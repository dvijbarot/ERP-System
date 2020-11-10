import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConfigModule {
  // BaseURL = 'http://103.224.247.200:7500/' ;
  BaseURL = 'http://localhost:7500/';
  ClientURL = 'http://103.224.247.200:7500';
  API = '12345';
}
