import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import 'echarts/map/js/world.js';
import 'echarts/map/js/china.js';
import 'echarts-gl';
import {generateGeoBarConfig} from '../../utils/config';

@Component({
  selector: 'app-geo-bar',
  templateUrl: './geo-bar.component.html',
  styleUrls: ['./geo-bar.component.css']
})
export class GeoBarComponent implements OnInit, OnChanges {
  options;
  @Input() data;
  constructor() {
  }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      if (this.data) {
        this.options = generateGeoBarConfig(this.data);
      }
    }
  }

}
