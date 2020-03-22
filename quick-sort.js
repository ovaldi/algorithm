function quick_sort (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midx = Math.floor(arr.length / 2);
  let mval = arr.splice(midx, 1)[0];
  let prev = [];
  let next = [];

  for (let i = 0, j = arr.length; i < j; i++) {
    if (arr[i] < mval) {
      prev.push(arr[i]);
    } else {
      next.push(arr[i]);
    }
  }

  return quick_sort(prev).concat([mval], quick_sort(next));
}
