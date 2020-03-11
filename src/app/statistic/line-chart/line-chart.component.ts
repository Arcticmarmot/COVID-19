import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {generateLineChartConfig} from '../../utils/config';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit, OnChanges {
  options;
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.options = generateLineChartConfig(this.data);
    }
  }

}
