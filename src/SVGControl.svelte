<script lang="ts">
  import type { Writable } from "svelte/store";
  import { angle } from "./Util";
  import type { Vector } from "./Vector";

  export let vector: Writable<Vector>;
  export let radius: number;
  export let length: number;

  let focus: boolean = false;
  let circle: SVGCircleElement;

  function onDeriveAngle(event: MouseEvent & { currentTarget: Window }) {
    if (event.buttons !== 1) focus = false;
    if (!focus) return;

    const rect = circle.getBoundingClientRect();
    $vector.direction = angle(
      event.clientX,
      event.clientY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2
    );
  }

  function onFocus(value: boolean) {
    focus = value;
  }
</script>

<svelte:window
  on:mouseup={onFocus.bind(null, false)}
  on:blur={onFocus.bind(null, false)}
  on:mousedown={onDeriveAngle}
  on:mousemove={onDeriveAngle}
/>

<g {...$$restProps}>
  <circle
    bind:this={circle}
    on:mousedown={onFocus.bind(null, true)}
    cx="50%"
    cy="50%"
    r={radius}
  />
  <line
    x1="50%"
    y1="50%"
    x2="50%"
    y2={length}
    transform={`rotate(${$vector.direction})`}
    stroke-linecap="round"
  />
</g>
