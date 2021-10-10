import { writable, derived } from "svelte/store";
import { average, sum } from "./Util";
import { Vector } from "./Vector";

export const wind = writable(new Vector(15, 1));
export const water = writable(new Vector(30, 1));
export const rudder = writable(new Vector(45, 1));
export const ship = derived(
  [wind, water, rudder],
  ([wind, water, rudder]) =>
    new Vector(
      average(wind.direction, water.direction, rudder.direction), // TODO: cleanup maths
      sum(wind.magnitude, water.magnitude, rudder.magnitude)
    )
);
