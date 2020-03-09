import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoBarComponent} from './geo-bar/geo-bar.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { RelatedNumComponent } from './related-num/related-num.component';
import {MatDividerModule} from '@angular/material/divider';
import { GeoScatterComponent } from './geo-scatter/geo-scatter.component';

@NgModule({
  declarations: [GeoBarComponent, RelatedNumComponent, GeoScatterComponent],
  exports: [
    GeoBarComponent,
    RelatedNumComponent,
    GeoScatterComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    MatDividerModule
  ]
})
export class StatisticModule { }
