import {WORLD, CHINA} from './coordinate';
export function trans2GeoBarData(switchMap, data) {
  switch (switchMap) {
    case 'china':
      return trans2GeoBarChinaData(data);
    case 'world':
      return trans2GeoBarWorldData(data);
  }
}
function trans2GeoBarWorldData(data) {
  console.log(data);
  const geoBarData = [];
  data.areaTree.forEach(area => {
    if (WORLD[area.name] ) {
      geoBarData.push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.total.confirm)]);
    }
  });
  console.log(geoBarData);
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
        geoBarData.push([CHINA[name][0], CHINA[name][1], Math.log(area.total.confirm + 1)]);
      } else {
        //console.log(name);
      }
    });
  });
  console.log(geoBarData);
  return geoBarData;
}
