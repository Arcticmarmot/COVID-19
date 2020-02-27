import {Component} from '@angular/core';
import {UpdateService} from './services/update.service';
import 'echarts/map/js/world.js';
import 'echarts/map/js/china.js';
import 'echarts-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options;
  constructor(private updateService: UpdateService) {
    this.updateService.update_h5().subscribe(
      data => {
        console.log('h5', JSON.parse(data.data));
        this.options = {
          backgroundColor: '#cdcfd5',
          geo3D: {
            map: 'world',
            shading: 'lambert',
            light: {
              main: {
                intensity: 5,
                shadow: true,
                shadowQuality: 'high',
                alpha: 30
              },
              ambient: {
                intensity: 0
              },
              ambientCubemap: {
                texture: 'data-gl/asset/canyon.hdr',
                exposure: 1,
                diffuseIntensity: 0.5
              }
            },
            environment: '#00aaff',
            viewControl: {
              distance: 50,
              panMouseButton: 'left',
              rotateMouseButton: 'right',
              maxDistance: 100,
              panSensitivity: 0.5
            },
            groundPlane: {
              show: true,
              color: '#999'
            },
            postEffect: {
              enable: true,
              bloom: {
                enable: false
              },
              SSAO: {
                radius: 1,
                intensity: 1,
                enable: true
              },
              depthOfField: {
                enable: false,
                focalRange: 10,
                blurRadius: 10,
                fstop: 1
              }
            },
            temporalSuperSampling: {
              enable: true
            },
            itemStyle: {
              borderColor: '#999',
              borderWidth: 1
            },

            regionHeight: 2
          },
          visualMap: {
            max: 40,
            calculable: true,
            realtime: false,
            inRange: {
              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
              colorAlpha: 0
            }
          },
          series: [{
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            shading: 'lambert',
            data: [[1,1,100000],[100,100,100]],
            barSize: 0.1,
            minHeight: 0.2,
            silent: true,
            itemStyle: {
              color: 'orange'
              // opacity: 0.8
            }
          }]
        };
      }
    );
    this.updateService.update_other().subscribe(
      data => {
        console.log(JSON.parse(data.data));
      }
    );
  }
}
