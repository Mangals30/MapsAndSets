const constants = [2.72, 3.14, 9.81,37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width:20,
  height:10,
  area:200,
  perimeter:60
}

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log('e, pi, gravity, humanBodyTemp, waterBoilingTemp = ' , e, pi, gravity, humanBodyTemp, waterBoilingTemp)
let [fin, est, sw, den, nor] = countries
console.log('fin, est, sw, den, nor = ' , fin, est, sw, den, nor)
let {width : w, height : h, area : a, perimeter : p} = rectangle
console.log('w, h, a, p = ', w, h, a, p)