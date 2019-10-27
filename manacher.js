/*
  给定一个字符串，求出字符串中的最长回文字符串长度。如，"asddbdd", 返回5。
  (所谓回文字符串，就是一个字符串，从左到右读和从右到左读是完全一样的，比如"abba"，"123454321"。)
*/

function manacher (str) {
  let newstr = '#' + str.split('').join('#') + '#';
  let arr = [];

  for (let i = 0, j = newstr.length; i < j; i++) {
    arr[i] = 1;

    while (i - arr[i] >= 0 && i + arr[i] <= j && newstr[i - arr[i]] === newstr[i + arr[i]]) {
      arr[i] += 1;
    }
  }

  return Math.max.apply(null, arr) - 1;
}
