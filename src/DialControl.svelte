<script lang="ts">
  import Needle from "./Needle.svelte";
  import type { Writable } from "svelte/store";
  import type { Vector } from "./Vector";

  export let vector: Writable<Vector>;
  export let scale: number = 1.0;

  let focus: boolean = false;
  let el: HTMLDivElement;

  function onDeriveAngle(event: MouseEvent) {
    if (event.buttons !== 1) focus = false;
    if (!focus) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.x - rect.width / 2;
    const y = -(event.clientY - rect.y - rect.height / 2); // browser treats top as 0
    $vector.direction = Math.atan2(y, x);
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
    border-width: var(--border-width);
    border-style: solid;
  }

  * :global(hr) {
    margin-top: calc(50% - var(--border-width));
  }
</style>
