import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoBarComponent} from './geo-bar/geo-bar.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { RelatedNumComponent } from './related-num/related-num.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [GeoBarComponent, RelatedNumComponent],
  exports: [
    GeoBarComponent,
    RelatedNumComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    MatDividerModule
  ]
})
export class StatisticModule { }
