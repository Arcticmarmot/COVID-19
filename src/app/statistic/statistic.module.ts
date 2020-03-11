import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoBarComponent} from './geo-bar/geo-bar.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { RelatedNumComponent } from './related-num/related-num.component';
import {MatDividerModule} from '@angular/material/divider';
import { GeoScatterComponent } from './geo-scatter/geo-scatter.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [GeoBarComponent, RelatedNumComponent, GeoScatterComponent, LineChartComponent, BarChartComponent],
  exports: [
    GeoBarComponent,
    RelatedNumComponent,
    GeoScatterComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    MatDividerModule
  ]
})
export class StatisticModule { }
