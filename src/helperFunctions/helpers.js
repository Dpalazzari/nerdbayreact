export function clone(obj){
  if (null == obj || "object" != typeof obj) return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

export function classSetter(bool, btn){
  (bool)
    ? btn.target.classList.add('clicked-status-button')
    : btn.target.classList.remove('clicked-status-button')
  return bool;
}