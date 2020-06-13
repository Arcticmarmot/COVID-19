import { graphic } from 'echarts/lib/echarts';
import {SIMPLE_WORLD} from './translate';
export function generateBarChartConfig(queryData) {
  return {
    title: {
      text: '病患数排名',
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
      end: 20
    }, {
      start: 0,
      end: 20,
      // tslint:disable-next-line:max-line-length
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
        name: '现存确诊',
        type: 'bar',
        data: queryData.yAxisNowComfirm,
        stack: 'one',
        color: 'lightcoral'
      },
      {
        name: '死亡',
        type: 'bar',
        data: queryData.yAxisDead,
        stack: 'one',
        color: 'crimson'
      },
      {
        name: '治愈',
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
      text: '每日疫情趋势',
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
        distance: 70,
        panMouseButton: 'left',
        rotateMouseButton: 'right',
        maxDistance: 100,
        panSensitivity: 1.5
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
    legend: {
      right: true,
      bottom: true,
      orient: 'vertical',
      data: ['现存确诊', '累计确诊', '治愈', '死亡'],
      selectedMode: 'single',
      selected: {
        '现存确诊': true,
        '累计确诊': false,
        '治愈': false,
        '死亡': false
      }
    },
    series: [
      {
        name: '现存确诊',
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        data: queryData['nowConfirm'],
        barSize: 0.3,
        minHeight: 0.5,
        silent: true,
        animation: true,
        itemStyle: {
          opacity: 0.8,
        }
      },
      {
        name: '累计确诊',
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        data: queryData['confirm'],
        barSize: 0.3,
        minHeight: 0.5,
        silent: true,
        animation: true,
        itemStyle: {
          opacity: 0.8,
        },
      },
      {
        name: '治愈',
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        data: queryData['heal'],
        barSize: 0.3,
        minHeight: 0.5,
        silent: true,
        animation: true,
        itemStyle: {
          opacity: 0.8,
        }
      },
      {
        name: '死亡',
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        data: queryData['dead'],
        barSize: 0.3,
        minHeight: 0.5,
        silent: true,
        animation: true,
        itemStyle: {
          opacity: 0.8,
        }
      }
    ]
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
    legend: {
      left: true,
      bottom: true,
      orient: 'vertical',
      data: ['现存确诊', '累计确诊', '治愈', '死亡'],
      selectedMode: 'single',
      selected: {
        '现存确诊': true,
        '累计确诊': false,
        '治愈': false,
        '死亡': false
      }
    },
    series: [
      {
        name: '现存确诊',
        type: 'map',
        roam: true,
        map: switchMap,
        label: {
          show: true,
          fontFamily: 'Microsoft YaHei',
        },
        nameMap: SIMPLE_WORLD,
        itemStyle: {
          areaColor: '#eee',
          borderWidth: 2,
          borderType: 'solid'
        },
        zoom: 1.2,
        selectedMode: 'multiple',
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold',
          }
        },
        // 文本位置修正
        textFixed: {
          Alaska: [20, -20]
        },
        data: queryData['nowConfirm']
      },
      {
        name: '累计确诊',
        type: 'map',
        roam: true,
        map: switchMap,
        label: {
          show: true,
          fontFamily: 'Microsoft YaHei',
        },
        nameMap: SIMPLE_WORLD,
        itemStyle: {
          areaColor: '#eee',
          borderWidth: 2,
          borderType: 'solid'
        },
        zoom: 1.2,
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold',
          }
        },
        // 文本位置修正
        textFixed: {
          Alaska: [20, -20]
        },
        data: queryData['confirm']
      },
      {
        name: '治愈',
        type: 'map',
        roam: true,
        map: switchMap,
        label: {
          show: true,
          fontFamily: 'Microsoft YaHei',
        },
        itemStyle: {
          areaColor: '#eee',
          borderWidth: 2,
          borderType: 'solid'
        },
        nameMap: SIMPLE_WORLD,
        zoom: 1.2,
        selectedMode: 'multiple',
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold',
          }
        },
        // 文本位置修正
        textFixed: {
          Alaska: [20, -20]
        },
        data: queryData['heal']
      },
      {
        name: '死亡',
        type: 'map',
        roam: true,
        map: switchMap,
        label: {
          show: true,
          fontFamily: 'Microsoft YaHei',
        },
        itemStyle: {
          areaColor: '#eee',
          borderWidth: 2,
          borderType: 'solid'
        },
        nameMap: SIMPLE_WORLD,
        zoom: 1.2,
        selectedMode: 'multiple',
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold',
          }
        },
        // 文本位置修正
        textFixed: {
          Alaska: [20, -20]
        },
        data: queryData['dead']
      },
    ]
  };
}
export function generatePieChartConfig(queryData) {
  return {
    title: {
      text: "病患占比",
      right: true,
      top: true,
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['现存确诊', '治愈', '死亡'],
    },

    series: [
      {
        name: '病患占比',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: queryData['situation']
      }
    ]
  };
}
