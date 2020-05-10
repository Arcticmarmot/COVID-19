export function concatObject(obj1, obj2) {
  // tslint:disable-next-line:forin
  for (const i in obj2) {
    obj1[i] = obj2[i];
  }
}
export function getDate() {
  // 获取今日日期
  const today = new Date().toLocaleDateString().split('/');
  const temp = [];
  temp.push(today[1]);
  temp.push(today[2]);
  const result = [];
  temp.forEach(e => {
    if (Number(e) < 10) {
      result.push('0' + e);
    } else {
      result.push('' + e);
    }
  });
  return result.join('.');
}
