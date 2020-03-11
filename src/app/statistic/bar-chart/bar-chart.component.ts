import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {generateBarChartConfig} from '../../utils/config';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() data;
  options;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.options = generateBarChartConfig(this.data);
    }
  }
}
