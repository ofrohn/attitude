export const abs = Math.abs;
export const atan = Math.atan;
export const atan2 = Math.atan2;
export const cos = Math.cos;
export const floor = Math.floor;
export const hypot = Math.hypot;
export const sign = Math.sign;
export const sin = Math.sin;
export const sqrt = Math.sqrt;
export const tan = Math.tan;

export const pi = Math.PI;
export const halfPi = pi / 2;
export const quarterPi = pi / 4;
export const tau = pi * 2;

export const degrees = 180 / pi;
export const radians = 1 / degrees;

export function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
export function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
