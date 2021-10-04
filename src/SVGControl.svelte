<script lang="ts">
  import type { Writable } from "svelte/store";
  import { angle } from "./Util";
  import type { Vector } from "./Vector";

  export let vector: Writable<Vector>;
  export let radius: number;
  export let length: number;
  export let background: string = "white";
  export let foreground: string = "black";

  let focus = false;

  function onMouseMove(
    event: MouseEvent & { currentTarget: SVGCircleElement }
  ) {
    if (focus) {
      const { offsetX, offsetY } = event;
      $vector.direction = angle(offsetX, offsetY, 60, 60);
    }
  }

  function onFocus() {
    focus = true;
  }

  function onBlur() {
    focus = false;
  }
</script>

<svelte:window on:mouseup={onBlur} on:blur={onBlur} />

<circle
  on:mousedown={onFocus}
  cx="50%"
  cy="50%"
  r={radius}
  fill={background}
  on:mousemove={onMouseMove}
/>
<line
  x1="50%"
  y1="50%"
  x2="50%"
  y2={length}
  stroke={foreground}
  stroke-width="3px"
  transform={`rotate(${$vector.direction})`}
/>
