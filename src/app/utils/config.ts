import { graphic } from 'echarts/lib/echarts';
export function generateBarChartConfig(queryData) {
  return {
    title: {
      text: 'Rank by Patients',
      left: 10
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        },
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      bottom: 90
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 12
    }, {
      start: 0,
      end: 12,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    xAxis: {
      data: queryData.xAxis,
      silent: false,
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      }
    },
    yAxis: {
      splitArea: {
        show: false
      }
    },
    series: [
      {
        name: 'Current confirmed',
        type: 'bar',
        data: queryData.yAxisNowComfirm,
        stack: 'one',
        color: 'lightcoral'
      },
      {
        name: 'Death',
        type: 'bar',
        data: queryData.yAxisDead,
        stack: 'one',
        color: 'crimson'
      },
      {
        name: 'Heal',
        type: 'bar',
        data: queryData.yAxisHeal,
        stack: 'one',
        color: 'darkseagreen',
      }
    ]
  };
}
export function generateLineChartConfig(queryData) {
  return {
    tooltip: {
      trigger: 'axis',
    },
    title: {
      left: 'center',
      text: 'Trend of Daily Increased Cases',
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: queryData.xAxis
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [{
      type: 'inside',
    }, {
      start: 0,
      end: 10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: [
      {
        name: '新增病例',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },

        data: queryData.yAxis
      }
    ]
  };
}
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
        name: 'Cases #',
        type: 'map',
        roam: true,
        map: switchMap,
        label: {
          show: switchMap === 'china'
        },
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
