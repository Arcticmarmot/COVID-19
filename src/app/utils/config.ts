import { graphic } from 'echarts/lib/echarts';
export function generateGeoBarConfig(switchMap, queryData) {
  return {
    backgroundColor: '#cdcfd5',
    geo3D: {
      map: switchMap,
      shading: 'lambert',
      light: {
        main: {
          intensity: 0.7,
          shadow: true,
          shadowQuality: 'ultra',
          alpha: 30
        },
        ambient: {
          intensity: 0
        },
        ambientCubemap: {
          texture: '../../assets/hdr/demo3.hdr',
          exposure: 1,
          diffuseIntensity: 0.5
        }
      },
      environment: new graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#00aaff' // 天空颜色
      }, {
        offset: 0.6, color: '#cdcfd5'
      }, {
        offset: 1, color: '#cdcfd5'
      }], false),
      viewControl: {
        distance: 50,
        panMouseButton: 'left',
        rotateMouseButton: 'right',
        maxDistance: 100,
        panSensitivity: 0.5
      },
      groundPlane: {
        show: true,
        color: '#cdcfd5'
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
        },
      },
      temporalSuperSampling: {
        enable: true
      },
      itemStyle: {
      },
      regionHeight: 2
    },
    visualMap: {
      max: 11,
      calculable: true,
      realtime: false,
      inRange: {
        color: [
          '#313695', '#4575b4', '#74add1',
          //'#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61',
          '#f46d43', '#d73027', '#a50026']
      },
      outOfRange: {
        colorAlpha: 0
      }
    },
    series: [{
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      shading: 'lambert',
      data: queryData,
      barSize: 0.1,
      minHeight: 0.2,
      silent: true,
      animation: true,
      itemStyle: {
        color: 'orange',
        opacity: 0.8
      }
    }]
  };
}
