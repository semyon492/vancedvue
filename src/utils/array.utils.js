export function spliceIfExist(arr, item) {
  if (Array.isArray(arr)) {
    const index = arr.indexOf(item);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }
}

export function range(end, start = 0, step = 1) {
  const arr = [];
  for (let i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
