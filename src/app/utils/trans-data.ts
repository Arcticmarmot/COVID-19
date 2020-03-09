import {WORLD, CHINA} from './coordinate';
import {COUNTRY_NAME} from './translate';
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

export function trans2RelatedNumData(data) {
  const result = [];
  // tslint:disable-next-line:forin
  for (const i in data.chinaTotal) {
    result.push([
      transChinese[i],
      data.chinaTotal[i], data.chinaAdd[i] > 0 ? '+' + data.chinaAdd[i] : data.chinaAdd[i],
      transColor[i]
    ]);
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
    subData.areaTree.forEach(country => {
      if (COUNTRY_NAME[country.name]) {
        if (COUNTRY_NAME[country.name] === 'Japen') {
          jp += country.total.confirm;
          geoScatterData.push({name: COUNTRY_NAME[country.name], value: jp});
        } else {
          geoScatterData.push({name: COUNTRY_NAME[country.name], value: country.total.confirm});
        }
      } else {
        console.log(country.name);
      }
    });
    console.log(geoScatterData);
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
    subData.areaTree.forEach(area => {
      if (WORLD[area.name] ) {
        geoBarData.push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.total.confirm + 5)]);
      }
    });
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

