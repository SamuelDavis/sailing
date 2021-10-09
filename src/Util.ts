export const ROTATION_LIMIT = 360;

export function sum(...numbers: number[]): number {
  return numbers.reduce((sum, operand) => sum + operand, 0);
}

export function average(...numbers: number[]): number {
  return sum(...numbers) / numbers.length;
}

export function angle(x: number, y: number, ox: number, oy: number): number {
  const dx = x - ox;
  const dy = y - oy;
  let theta = Math.atan2(dy, dx);

  theta = radiansToDegrees(theta);
  // /* TODO: fix this terrible nonsense */
  theta += 90; // css rotations treat up as origin
  theta = (theta + 360) % 360; // always positive
  // if (theta > 180) theta -= 360; // make range [-180, 180] not [-90, 270]
  // if (theta < 0) theta += 360; // compensate for negatives

  return theta;
}

function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}