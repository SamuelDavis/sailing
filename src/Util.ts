import type { Readable, Writable } from "svelte/store";

export const MAX_DIRECTION = Math.PI;
export const MAX_MAGNITUDE = 10;

export class Vector {
  constructor(public direction: number = 0, public magnitude: number = 0) {}
}

export function deriveHypotenuse(x: number, y: number): number {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export function deriveDegreesFromRadians(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function toCssVars(vars: { [key: string]: string | number }): string {
  return Object.entries(vars)
    .map(([key, val]) => `--${key}:${val};`)
    .join("");
}

export function isWritable<T>(
  store: Readable<T> | Writable<T>
): store is Writable<T> {
  return "set" in store && "update" in store;
}
