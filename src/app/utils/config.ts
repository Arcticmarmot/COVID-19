import { graphic } from 'echarts/lib/echarts';
export function generateGeoBarConfig(switchMap, queryData) {
  return {
    title: {
      text: (switchMap === 'china' ? '中国' : '世界') + '疫情累计确诊病例柱状图',
      left: 'right'
    },
    toolbox: {
      show: true,
      left: 'left',
      top: 'top',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
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
      regionHeight: 1
    },
    visualMap: {
      max: 10,
      calculable: true,
      realtime: false,
      text: ['high', 'low'],
      inRange: {
        color: [
          '#313695', '#4575b4', '#fdae61',
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
      barSize: 0.3,
      minHeight: 0.5,
      silent: true,
      animation: true,
      itemStyle: {
        color: 'orange',
        opacity: 0.8
      }
    }]
  };
}
export function generateGeoScatterConfig(switchMap, queryData) {
  return {
    title: {
      text: (switchMap === 'china' ? '中国' : '世界') + '疫情累计确诊病例密度图',
      left: 'right'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      type: 'piecewise',
      left: 'right',
      pieces: [
        {min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
        {min: 1000, max: 9999},
        {min: 100, max: 999},
        {min: 10, max: 99},
        {min: 1, max: 9},
        {max: 1}     // 不指定 min，表示 min 为无限大（-Infinity）。
      ],
      inRange: {
        color: ['#e0f3f8', '#abd9e9', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027']
      },
      calculable: true
    },
    toolbox: {
      show: true,
      left: 'left',
      top: 'top',
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        type: 'map',
        roam: true,
        map: switchMap,
        emphasis: {
          label: {
            show: true
          }
        },
        // 文本位置修正
        textFixed: {
          Alaska: [20, -20]
        },
        data: queryData
      }
    ]
  };
}
