<script lang="ts">
  import type { Readable } from "svelte/store";
  import type { Vector } from "./Vector";

  export let vector: Readable<Vector>;
</script>

<hr style={`--direction:${$vector.direction}rad`} {...$$restProps} />

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

    /* CSS rotation is reversed */
    transform: rotate(calc(var(--direction) * -1));
    transform-origin: center left;
  }
</style>
