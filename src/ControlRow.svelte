<script lang="ts">
  import type { Readable, Writable } from "svelte/store";
  import Dial from "./Dial.svelte";
  import {
    deriveDegreesFromRadians,
    isWritable,
    MAX_DIRECTION,
    MAX_MAGNITUDE,
    Vector,
  } from "./Util";

  export let maxMagnitude: number = MAX_MAGNITUDE;
  export let label: string;
  export let vector: Readable<Vector> | Writable<Vector>;
</script>

<tr {...$$restProps}>
  <td>{label}</td>
  <td>
    <label>
      <span>
        {$vector.direction.toFixed(2)}<sup>rad</sup>
        /
        {deriveDegreesFromRadians($vector.direction).toFixed(2)}<sup>deg</sup>
      </span>
      <input
        type="range"
        min={-MAX_DIRECTION}
        max={MAX_DIRECTION}
        step={0.01}
        bind:value={$vector.direction}
        disabled={!isWritable(vector)}
      />
    </label>
  </td>
  <td>
    <label>
      {$vector.magnitude.toFixed(2)} / {maxMagnitude}
      <input
        type="range"
        min={0}
        max={MAX_MAGNITUDE}
        step={1}
        bind:value={$vector.magnitude}
        disabled={!isWritable(vector)}
      />
    </label>
  </td>
  <td>
    <Dial {vector} {maxMagnitude} />
  </td>
</tr>

<style lang="css">
  td {
    text-align: center;
  }
  td label {
    display: grid;
    grid-template-columns: minmax(18ch, auto) 1fr;
  }
</style>
