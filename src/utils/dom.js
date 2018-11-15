/**
 * cssSupport 是否支持某 css 属性
 * @param {string} attr
 * @param {string} val
 */
export function cssSupport(attr, val) {
  const el = document.createElement('div');

  if (attr in el.style) {
    el.style[attr] = val;

    return el.style[attr] === val;
  }

  return false;
}

export function loadScript(src, cb) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;

  let flag = false; // 防止 IE9/10 中执行两次

  script.onload = script.onreadystatechange = function() {
    if (
      flag === false &&
      (!this.readyState || this.readyState === 'complete')
    ) {
      flag = true;
      cb && cb();
    }
  };

  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
}
