<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { Vector } from "./Vector";

  export let vector: Readable<Vector>;
</script>

<hr
  style={`--direction:${$vector.direction}rad;--magnitude:${$vector.magnitude};`}
  {...$$restProps}
/>

<style lang="css">
  :root {
    --border-width: 2px;
    --direction: 0deg;
    --magnitude: 1;
    --length: calc(50% + var(--border-width));
  }

  hr {
    width: calc(var(--length) + calc(1em * var(--magnitude) / 10));
    margin-left: 50%;
    border-width: var(--border-width);
    border-style: solid;
    border-radius: 25px;

    /* CSS rotation is reversed */
    transform: rotate(calc(var(--direction) * -1));
    transform-origin: center left;
  }
</style>
