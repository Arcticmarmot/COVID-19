import {WORLD, CHINA} from './coordinate';

export function trans2GeoBarData(data) {

  console.log(data);
  const geoBarData = [];
  data.areaTree.forEach(area => {
    if (WORLD[area.name] ) {
      geoBarData.push([WORLD[area.name][0], WORLD[area.name][1], Math.log(area.total.confirm)]);
    } else {
      console.log(area.name);
    }
  });
  console.log(geoBarData);
  return geoBarData;
}
