<script lang="ts">
  import type { Readable } from "svelte/store";

  import type { Vector } from "./Vector";

  export let vector: Readable<Vector>;
</script>

<hr style={`--direction:${$vector.direction}deg`} {...$$restProps} />

<style lang="css">
  :root {
    --border-width: 2px;
    --direction: 0deg;
  }

  hr {
    width: calc(50% + var(--border-width));
    margin-left: 50%;
    border: var(--border-width) solid;
    border-radius: 25px;

    transform: rotate(calc(var(--direction) - 90deg));
    transform-origin: center left;
  }
</style>
