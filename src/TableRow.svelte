<script lang="ts">
  import type { Writable, Readable } from "svelte/store";
  import { radiansToDegrees, ROTATION_LIMIT } from "./Util";
  import type { Vector } from "./Vector";

  export let label: string;
  export let interactive = true;
  export let vector: Writable<Vector> | Readable<Vector>;
</script>

<tr {...$$restProps}>
  <td>{label}</td>
  <td>
    <label for={`${label}-direction`}>
      {$vector.direction.toFixed(2)}<sup>rad</sup>
      /
      {radiansToDegrees($vector.direction).toFixed(2)}&deg;
    </label>
    {#if interactive}
      <input
        bind:value={$vector.direction}
        id={`${label}-direction`}
        type="range"
        min={-ROTATION_LIMIT}
        max={ROTATION_LIMIT}
        step="0.01"
      />
    {/if}
  </td>
  <td>
    <label for={`${label}-direction`}>
      {$vector.magnitude.toFixed(2)}
    </label>
    {#if interactive}
      <input
        bind:value={$vector.magnitude}
        id={`${label}-magnitude`}
        type="range"
        min="0"
        max="10"
        step="1"
      />
    {/if}
  </td>
</tr>

<style lang="css">
  label {
    display: block;
  }
</style>
