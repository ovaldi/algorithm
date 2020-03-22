function throttle (func, wait = 0) {
  let tid = 0;
  let lastCallTime = 0;
  
  return (...args) => {
    const sinceLastCall = Date.now() - lastCallTime;
    if (sinceLastCall > wait) {
      func.apply(null, args);
      lastCallTime = Date.now();
    } else {
      window.clearTimeout(tid);
      tid = window.setTimeout(() => {
        func.apply(null, args);
        lastCallTime = Date.now();
      }, wait - sinceLastCall);
    }
  };
}

const fn = throttle(() => console.log('abc'), 1000);
fn(); // Output 'abc'
fn(); // Nothing
fn(); // Nothing
fn(); // Ouput 'abc' after 1s
