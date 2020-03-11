import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {generateGeoScatterConfig} from '../../utils/config';

@Component({
  selector: 'app-geo-scatter',
  templateUrl: './geo-scatter.component.html',
  styleUrls: ['./geo-scatter.component.less']
})
export class GeoScatterComponent implements OnInit, OnChanges {
  options;
  @Input() data;
  @Input() switch;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data && (changes.switch || changes.data)) {
      this.options = generateGeoScatterConfig(this.switch, this.data);
    }
  }

}
