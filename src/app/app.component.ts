import {Component} from '@angular/core';
import {UpdateService} from './services/update.service';
import {
  trans2BarChartData,
  trans2GeoBarData,
  trans2GeoScatterData,
  trans2LineChartData,
  trans2PieChartData,
  trans2RelatedNumData
} from './utils/trans-data';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {concatObject} from './utils/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
  export class AppComponent {
  geoSwitch = '2d';
  switch = 'china';
  geoBarSwitch = 'china';
  geoBarData;
  geoScatterSwitch = 'china';
  geoScatterData;
  lineChartData;
  barChartData;
  pieChartData;
  relatedNumData = {};
  parseData = {};
  times = 0;
  constructor(private updateService: UpdateService) {
    this.updateService.update().subscribe(
      data => {
        concatObject(this.parseData, JSON.parse(data.data));
        console.log(this.parseData);
        this.times++;
        if (this.times === 2) {
          this.update();
        }
      }
    );
  }
  update() {
    if (this.geoSwitch === '3d') {
      this.geoBarData = trans2GeoBarData(this.geoBarSwitch, this.parseData);
    } else {
      this.geoScatterData = trans2GeoScatterData(this.geoScatterSwitch, this.parseData);
    }
    this.relatedNumData = trans2RelatedNumData(this.switch, this.parseData);
    this.lineChartData = trans2LineChartData(this.switch, this.parseData);
    this.barChartData = trans2BarChartData(this.switch, this.parseData);
    this.pieChartData = trans2PieChartData(this.switch, this.parseData);
  }

  geoSwitchChange($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.geoSwitch = '3d';
    } else {
      this.geoSwitch = '2d';
    }
    this.update();
  }

  geoWorldSwitchChange() {
    if (this.switch !== 'world') {
      this.switch = 'world';
      this.geoScatterSwitch = 'world';
      this.geoBarSwitch = 'world';
      this.update();
    }
  }

  geoChinaSwitchChange() {
    if (this.switch !== 'china') {
      this.switch = 'china';
      this.geoScatterSwitch = 'china';
      this.geoBarSwitch = 'china';
      this.update();
    }
  }
}
