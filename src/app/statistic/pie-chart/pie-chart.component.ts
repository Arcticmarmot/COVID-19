import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {generatePieChartConfig} from '../../utils/config';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data;
  options;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.options = generatePieChartConfig(this.data);
    }
  }

}
