import {WORLD, CHINA} from './coordinate';
import {COUNTRY_NAME} from './translate';
import {count} from 'rxjs/operators';
const transChinese = {
  confirm: '累计确诊',
  heal: '治愈',
  dead: '死亡',
  nowConfirm: '现存确诊',
  suspect: '现存疑似',
  nowSevere: '现存重症',
  importedCase: '境外流入'
};
const transColor = {
  confirm: 'deepskyblue',
  heal: 'darkseagreen',
  dead: 'black',
  nowConfirm: 'red',
  suspect: 'lightcoral',
  nowSevere: 'crimson',
  importedCase: 'cornflowerblue'
};
export function trans2BarChartData(switchArea, data) {
  const result = {xAxis: [], yAxisNowComfirm: [], yAxisHeal: [], yAxisDead: []};
  if (switchArea === 'world') {
    data.foreignList.forEach(country => {
      result.xAxis.push(country.name);
      result.yAxisNowComfirm.push(country.confirm - country.heal);
      result.yAxisHeal.push(country.heal);
      result.yAxisDead.push(country.dead);
    });
  } else if (switchArea === 'china') {
    data.areaTree[0].children.forEach(province => {
      result.xAxis.push(province.name);
      result.yAxisNowComfirm.push(province.total.confirm - province.total.heal);
      result.yAxisHeal.push(province.total.heal);
      result.yAxisDead.push(province.total.dead);
    });
  }
  console.log(result, 'eee');
  return result;
}
export function trans2LineChartData(switchArea, data) {
  const result = {xAxis: [], yAxis: []};
  if (switchArea === 'world') {
    data.globalDailyHistory.forEach(day => {
      result.xAxis.push(day.date);
      result.yAxis.push(day.all.newAddConfirm);
    });
  } else if (switchArea === 'china') {
    data.dailyNewAddHistory.forEach(day => {
      result.xAxis.push(day.date);
      result.yAxis.push(day.country);
    });
  }
  console.log(result);
  return result;
}
export function trans2RelatedNumData(switchArea, data) {
  const result = [];
  if (switchArea === 'china') {
    // tslint:disable-next-line:forin
    for (const i in data.chinaTotal) {
      result.push([
        transChinese[i],
        data.chinaTotal[i],
        data.chinaAdd[i] > 0 ? '+' + data.chinaAdd[i] : data.chinaAdd[i],
        transColor[i]
      ]);
    }
  } else if (switchArea === 'world') {
    // nowConfirm: 32779
    // confirm: 38448
    // heal: 4536
    // dead: 1133
    // nowConfirmAdd: 2303
    // confirmAdd: 2783
    // healAdd: 324
    // deadAdd: 156
    // tslint:disable-next-line:forin
    for (const i in data.globalStatis) {
      if (transChinese[i]) {
        result.push([
          transChinese[i],
          data.globalStatis[i],
          data.globalStatis[i + 'Add'] > 0 ? '+' + data.globalStatis[i + 'Add'] : data.globalStatis[i + 'Add'],
          transColor[i]
        ]);
      }
    }
  }
  return {
    lastUpdateTime: data.lastUpdateTime,
    nums: result
  };
}
export function trans2GeoScatterData(switchMap, data) {
  function trans2GeoScatterChinaData(subData: any) {
    const geoScatterData = [];
    subData.areaTree[0].children.forEach(province => {
      geoScatterData.push({name: province.name, value: province.total.confirm});
    });
    return geoScatterData;
  }

  function trans2GeoScatterWorldData(subData: any) {
    const geoScatterData = [];
    let jp = 0;
    subData.foreignList.forEach(country => {
      if (COUNTRY_NAME[country.name]) {
        if (COUNTRY_NAME[country.name] === 'Japen') {
          jp += country.confirm;
          geoScatterData.push({name: COUNTRY_NAME[country.name], value: jp});
        } else {
          geoScatterData.push({name: COUNTRY_NAME[country.name], value: country.confirm});
        }
      } else {
        console.log(country.name);
      }
    });
    geoScatterData.push({name: 'China', value: subData.chinaTotal.confirm})
    return geoScatterData;
  }

  switch (switchMap) {
    case 'china':
      return trans2GeoScatterChinaData(data);
    case 'world':
      return trans2GeoScatterWorldData(data);
  }
}
export function trans2GeoBarData(switchMap, data) {
  function trans2GeoBarWorldData(subData) {
    const geoBarData = [];
    subData.foreignList.forEach(area => {
      if (WORLD[area.name] ) {
        geoBarData.push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.confirm + 5)]);
      }
    });
    geoBarData.push([WORLD['中国'][0], WORLD['中国'][1], Math.log(subData.chinaTotal.confirm + 5)])
    return geoBarData;
  }
  function trans2GeoBarChinaData(subData) {
    const geoBarData = [];
    subData.areaTree[0].children.forEach(prov => {
      prov.children.forEach(area => {
        const name = area.name
          .replace('县', '')
          .replace('区', '')
          .replace('市', '');
        if (CHINA[name]) {
          geoBarData.push([CHINA[name][0], CHINA[name][1], Math.log(area.total.confirm + 5)]);
        }
      });
    });
    return geoBarData;
  }
  switch (switchMap) {
    case 'china':
      return trans2GeoBarChinaData(data);
    case 'world':
      return trans2GeoBarWorldData(data);
  }
}

