import {Component} from '@angular/core';
import {UpdateService} from './services/update.service';
import {trans2GeoBarData, trans2GeoScatterData, trans2RelatedNumData} from './utils/trans-data';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
  export class AppComponent {
  geoSwitch = '2d';
  geoBarSwitch = 'world';
  geoBarData;
  geoScatterSwitch = 'world';
  geoScatterData;
  relatedNumData = {};
  parseData = {};
  constructor(private updateService: UpdateService) {
    this.updateService.update_h5().subscribe(
      data => {
        this.parseData = JSON.parse(data.data);
        this.update();
      }
    );
    this.updateService.update_other().subscribe(
      data => {
        console.log('history', JSON.parse(data.data));
      }
    );
  }
  update() {
    if (this.geoSwitch === '3d') {
      this.geoBarData = trans2GeoBarData(this.geoBarSwitch, this.parseData);
    } else {
      this.geoScatterData = trans2GeoScatterData(this.geoScatterSwitch, this.parseData);
    }
    this.relatedNumData = trans2RelatedNumData(this.parseData);
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
    if (this.geoScatterSwitch !== 'world' || this.geoBarSwitch !== 'world') {
      this.geoScatterSwitch = 'world';
      this.geoBarSwitch = 'world';
      this.update();
    }
  }

  geoChinaSwitchChange() {
    if (this.geoScatterSwitch !== 'china' || this.geoBarSwitch !== 'china') {
      this.geoScatterSwitch = 'china';
      this.geoBarSwitch = 'china';
      this.update();
    }
  }
}
