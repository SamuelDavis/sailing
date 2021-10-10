import { Vector } from "./Vector";

export const ROTATION_LIMIT = Math.PI;

export function deriveVectorComponents(vector: Vector): [number, number] {
  return [
    Math.cos(vector.direction) * vector.magnitude,
    Math.sin(vector.direction) * vector.magnitude,
  ];
}

export function addVectors(...vectors: Vector[]): Vector {
  let x = 0;
  let y = 0;
  for (const vector of vectors) {
    const [vx, vy] = deriveVectorComponents(vector);
    x += vx;
    y += vy;
  }
  const m = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  return new Vector(Math.atan2(y, x), m);
}

export function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}
