import { writable, derived } from "svelte/store";
import { addVectors } from "./Util";
import { Vector } from "./Vector";

export const wind = writable(new Vector(0, 1));
export const water = writable(new Vector(0, 1));
export const rudder = writable(new Vector(0, 1));
export const ship = derived([wind, water, rudder], (vectors) => {
  return addVectors(...vectors);
});
