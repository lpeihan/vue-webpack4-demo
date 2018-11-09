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
