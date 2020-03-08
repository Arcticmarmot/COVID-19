import {WORLD, CHINA} from './coordinate';
const transChinese = {
  confirm: '累计确诊',
  heal: '治愈',
  dead: '死亡',
  nowConfirm: '现存确诊',
  suspect: '现存疑似',
  nowSevere: '现存重症'
};
const transColor = {
  confirm: 'deepskyblue',
  heal: 'darkseagreen',
  dead: 'black',
  nowConfirm: 'oranged',
  suspect: 'lightcoral',
  nowSevere: 'crimson'
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
export function trans2GeoBarData(switchMap, data) {
  switch (switchMap) {
    case 'china':
      return trans2GeoBarChinaData(data);
    case 'world':
      return trans2GeoBarWorldData(data);
  }
}
function trans2GeoBarWorldData(data) {
  const geoBarData = [];
  data.areaTree.forEach(area => {
    if (WORLD[area.name] ) {
      geoBarData.push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.total.confirm + 5)]);
    }
  });
  return geoBarData;
}
function trans2GeoBarChinaData(data) {
  console.log(data);
  const geoBarData = [];
  data.areaTree[0].children.forEach(prov => {
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
