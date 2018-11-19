/**
 * debounce 防抖
 * @param {function} fn
 * @param {number} delay 毫秒
 */
export function debounce(fn, delay) {
  let timer;
  let ctx;
  let args;

  const execute = function() {
    fn.apply(ctx, args);
  };

  return function() {
    ctx = this;
    args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(execute, delay);
  };
}

/**
 * throttle 节流
 * @param {function} fn
 * @param {number} delay 毫秒
 */
export function throttle(fn, delay) {
  let ctx;
  let args;
  let timer;
  let now;
  let previous;

  const execute = function() {
    fn.apply(ctx, args);
    previous = now;
  };

  return function() {
    ctx = this;
    args = arguments;
    now = Date.now();

    if (timer) {
      clearTimeout(timer);
    }

    const diff = now - (previous + delay);

    if (previous) {
      if (diff >= 0) {
        execute();
      } else {
        timer = setTimeout(execute, -diff);
      }
    } else {
      execute();
    }
  };
}

/**
 * 获取 query
 * @param {String} name
 */
export function getQueryString(name) {
  const res = location.search.match(
    new RegExp("[?&]" + name + "=([^&]+)", "i")
  );

  if (res == null || res.length < 1) {
    return null;
  }

  return res[1];
}

/**
 * 去除首尾空格
 * @param {String} str
 */
export function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
