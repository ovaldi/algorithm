function debounce (func, wait = 0) {
  let tid = 0;
  
  return (...args) => {
    if (tid > 0) {
      window.clearTimeout(tid);
    }

    tid = window.setTimeout(() => {
      func.apply(null, args);
    }, wait);
  };
}

const fn = debounce(() => console.log('abc'), 1000);
fn(); // Nothing
fn(); // Nothing
fn(); // Nothing
fn(); // Ouput 'abc' after 1s
