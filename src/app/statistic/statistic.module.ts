import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoBarComponent} from './geo-bar/geo-bar.component';
import {NgxEchartsModule} from 'ngx-echarts';



@NgModule({
  declarations: [GeoBarComponent],
  exports: [
    GeoBarComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class StatisticModule { }
