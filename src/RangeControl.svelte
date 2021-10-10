<script lang="ts">
  import type { Writable } from "svelte/store";

  import { ROTATION_LIMIT } from "./Util";
  import type { Vector } from "./Vector";

  export let label: string;
  export let id: string;
  export let vector: Writable<Vector>;
</script>

<div {...$$restProps}>
  <label for={id}>{label} ({$vector.direction.toFixed(2)}<sup>rad</sup>)</label>
  <input
    {id}
    type="range"
    step="0.01"
    min={-ROTATION_LIMIT}
    max={ROTATION_LIMIT}
    bind:value={$vector.direction}
  />
</div>

<style lang="css">
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  label {
    padding: 0.25em;
    border-radius: 5px;
  }
</style>
