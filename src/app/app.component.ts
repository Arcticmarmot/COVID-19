import {Component} from '@angular/core';
import {UpdateService} from './services/update.service';
import {trans2GeoBarData} from './utils/trans-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
  geoBarSwitch = 'china';
  geoBarData;
  constructor(private updateService: UpdateService) {
    this.updateService.update_h5().subscribe(
      data => {
        const parseData = JSON.parse(data.data);
        this.geoBarData = trans2GeoBarData(this.geoBarSwitch, parseData);
      }
    );
    this.updateService.update_other().subscribe(
      data => {
        console.log(JSON.parse(data.data));
      }
    );
  }
}
