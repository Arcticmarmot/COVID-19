import {Component} from '@angular/core';
import {UpdateService} from './services/update.service';
import {trans2GeoBarData, trans2GeoScatterData, trans2RelatedNumData} from './utils/trans-data';


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
  constructor(private updateService: UpdateService) {
    this.updateService.update_h5().subscribe(
      data => {
        const parseData = JSON.parse(data.data);
        console.log(parseData);
        if (this.geoSwitch === '3d') {
          this.geoBarData = trans2GeoBarData(this.geoBarSwitch, parseData);
        } else {
          this.geoScatterData = trans2GeoScatterData(this.geoScatterSwitch, parseData);
        }
        this.relatedNumData = trans2RelatedNumData(parseData);
      }
    );
    // this.updateService.update_other().subscribe(
    //   data => {
    //     console.log(JSON.parse(data.data));
    //   }
    // );
  }
}
