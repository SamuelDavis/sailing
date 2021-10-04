<script lang="ts">
  import type { Writable } from "svelte/store";

  import { ROTATION_LIMIT } from "./Util";
  import type { Vector } from "./Vector";

  export let label: string;
  export let id: string;
  export let vector: Writable<Vector>;
</script>

<label for={id}>{label}</label>
<input
  {id}
  type="range"
  step="0.01"
  min={-ROTATION_LIMIT / 2}
  max={ROTATION_LIMIT / 2}
  bind:value={$vector.direction}
/>
