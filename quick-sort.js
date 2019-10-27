function quick_sort (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midx = Math.floor(arr.length / 2);
  let mval = arr.splice(midx, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0, j = arr.length; i < j; i++) {
    if (arr[i] < mval) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quick_sort(left).concat([mval], quick_sort(right));
}
