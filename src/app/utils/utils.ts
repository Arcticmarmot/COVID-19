export function concatObject(obj1, obj2) {
  // tslint:disable-next-line:forin
  for (const i in obj2) {
    obj1[i] = obj2[i];
  }
}
