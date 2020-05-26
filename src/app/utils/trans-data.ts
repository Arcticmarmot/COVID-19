import {WORLD, CHINA} from './coordinate';
import {COUNTRY_NAME, SIMPLE_WORLD} from './translate';
import {getDate} from './utils';
const transChinese = {
  confirm: '累计确诊',
  heal: '治愈',
  dead: '死亡',
  nowConfirm: '现存确诊',
  suspect: '现存疑似',
  nowSevere: '现存重症',
  importedCase: '境外流入',
  noInfect: '无症状感染者'
};
const transColor = {
  confirm: 'deepskyblue',
  heal: 'darkseagreen',
  dead: 'black',
  nowConfirm: 'red',
  suspect: 'lightcoral',
  nowSevere: 'crimson',
  importedCase: 'cornflowerblue',
  noInfect: 'crimson'
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
      result.yAxisNowComfirm.push(province.total.confirm - province.total.heal - province.total.dead);
      result.yAxisHeal.push(province.total.heal);
      result.yAxisDead.push(province.total.dead);
    });
  }
  return result;
}
export function trans2LineChartData(switchArea, data) {
  const today = getDate();
  const result = {xAxis: [], yAxis: []};
  if (switchArea === 'world') {
    data.globalDailyHistory.forEach(day => {
      if (day.date !== today && day.date !== '05.15') {
        result.xAxis.push(day.date);
        result.yAxis.push(day.all.newAddConfirm);
      }
    });
  } else if (switchArea === 'china') {
    data.dailyNewAddHistory.forEach(day => {
      if (day.date !== today && day.date !== '05.15') {
        result.xAxis.push(day.date);
        result.yAxis.push(day.country);
      }
    });
  }
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
    const geoScatterData = {
      nowConfirm: [],
      confirm: [],
      heal: [],
      dead: []
    };
    subData.areaTree[0].children.forEach(province => {
      geoScatterData['nowConfirm'].push({name: province.name, value: province.total.nowConfirm});
      geoScatterData['confirm'].push({name: province.name, value: province.total.confirm});
      geoScatterData['heal'].push({name: province.name, value: province.total.heal});
      geoScatterData['dead'].push({name: province.name, value: province.total.dead});
    });
    return geoScatterData;
  }

  function trans2GeoScatterWorldData(subData: any) {
    const geoScatterData = {
      nowConfirm: [],
      confirm: [],
      heal: [],
      dead: []
    };
    subData.foreignList.forEach(country => {
      const countryName = SIMPLE_WORLD[COUNTRY_NAME[country.name]]
      if (countryName) {
        /*if (COUNTRY_NAME[country.name] === 'Japen') {
          jp += country.confirm;
          geoScatterData['nowConfirm'].push({name: COUNTRY_NAME[country.name], value: jp});
          geoScatterData['confirm'].push({name: COUNTRY_NAME[country.name], value: jp});
          geoScatterData['heal'].push({name: COUNTRY_NAME[country.name], value: jp});
          geoScatterData['dead'].push({name: COUNTRY_NAME[country.name], value: jp});
        } else {
          geoScatterData['nowConfirm'].push({name: COUNTRY_NAME[country.name], value: country.nowConfirm});
          geoScatterData['confirm'].push({name: COUNTRY_NAME[country.name], value: country.confirm});
          geoScatterData['heal'].push({name: COUNTRY_NAME[country.name], value: country.heal});
          geoScatterData['dead'].push({name: COUNTRY_NAME[country.name], value: country.dead});
        }*/
        geoScatterData['nowConfirm'].push({name: countryName, value: country.nowConfirm});
        geoScatterData['confirm'].push({name: countryName, value: country.confirm});
        geoScatterData['heal'].push({name: countryName, value: country.heal});
        geoScatterData['dead'].push({name: countryName, value: country.dead});
      }
    });
    geoScatterData['nowConfirm'].push({name: 'CN', value: subData.chinaTotal.nowConfirm});
    geoScatterData['confirm'].push({name: 'CN', value: subData.chinaTotal.confirm});
    geoScatterData['heal'].push({name: 'CN', value: subData.chinaTotal.heal});
    geoScatterData['dead'].push({name: 'CN', value: subData.chinaTotal.dead});
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
    const geoBarData = {
      nowConfirm: [],
      confirm: [],
      heal: [],
      dead: []
    };
    subData.foreignList.forEach(area => {
      if (WORLD[area.name] ) {
        geoBarData['nowConfirm'].push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.nowConfirm + 1)]);
        geoBarData['confirm'].push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.confirm + 1)]);
        geoBarData['heal'].push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.heal + 1)]);
        geoBarData['dead'].push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.dead + 1)]);
      }
    });
    geoBarData['nowConfirm'].push([WORLD['中国'][0], WORLD['中国'][1], Math.log(subData.chinaTotal.nowConfirm + 1)]);
    geoBarData['confirm'].push([WORLD['中国'][0], WORLD['中国'][1], Math.log(subData.chinaTotal.confirm + 1)]);
    geoBarData['heal'].push([WORLD['中国'][0], WORLD['中国'][1], Math.log(subData.chinaTotal.heal + 1)]);
    geoBarData['dead'].push([WORLD['中国'][0], WORLD['中国'][1], Math.log(subData.chinaTotal.dead + 1)]);
    return geoBarData;
  }
  function trans2GeoBarChinaData(subData) {
    const geoBarData = {
      nowConfirm: [],
      confirm: [],
      heal: [],
      dead: []
    };
    subData.areaTree[0].children.forEach(prov => {
      prov.children.forEach(area => {
        const name = area.name
          .replace('县', '')
          .replace('区', '')
          .replace('市', '');
        if (CHINA[name]) {
          geoBarData['nowConfirm'].push([CHINA[name][0], CHINA[name][1], Math.log(area.total.nowConfirm + 5)]);
          geoBarData['confirm'].push([CHINA[name][0], CHINA[name][1], Math.log(area.total.confirm + 5)]);
          geoBarData['heal'].push([CHINA[name][0], CHINA[name][1], Math.log(area.total.heal + 5)]);
          geoBarData['dead'].push([CHINA[name][0], CHINA[name][1], Math.log(area.total.dead + 5)]);
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
export function trans2PieChartData(switchArea, data) {
  const result = {
    situation: []
  };
  if (switchArea === 'china') {
    result['situation'].push({value: data.chinaTotal['nowConfirm'], name: '现存确诊'});
    result['situation'].push({value: data.chinaTotal['heal'], name: '治愈'});
    result['situation'].push({value: data.chinaTotal['dead'], name: '死亡'});
  } else if (switchArea === 'world') {
    result['situation'].push({value: data.globalStatis['nowConfirm'], name: '现存确诊'});
    result['situation'].push({value: data.globalStatis['heal'], name: '治愈'});
    result['situation'].push({value: data.globalStatis['dead'], name: '死亡'});
  }
  return result;
}

