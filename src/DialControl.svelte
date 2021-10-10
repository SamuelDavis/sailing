<script lang="ts">
  import type { Writable } from "svelte/store";
  import Needle from "./Needle.svelte";
  import { angle } from "./Util";

  import type { Vector } from "./Vector";

  export let vector: Writable<Vector>;
  export let scale: number = 1.0;

  let focus: boolean = false;
  let el: HTMLDivElement;

  function onDeriveAngle(event: MouseEvent & { currentTarget: Window }) {
    if (event.buttons !== 1) focus = false;
    if (!focus) return;

    const rect = el.getBoundingClientRect();
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

<div
  style={`--scale:${scale};--direction:${$vector.direction}deg`}
  {...$$restProps}
  bind:this={el}
  on:mousedown={onFocus.bind(null, true)}
>
  <Needle {vector} />
</div>

<style lang="css">
  :root {
    --border-width: 2px;
    --scale: 1;
  }

  div {
    width: calc(100% * var(--scale));
    height: calc(100% * var(--scale));

    border-radius: 50%;
    border: var(--border-width) solid;
  }

  * :global(hr) {
    margin-top: calc(50% - var(--border-width));
  }
</style>
