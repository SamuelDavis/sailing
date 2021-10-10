<script lang="ts">
  import type { Writable } from "svelte/store";
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
  <span />
</div>

<style lang="css">
  div {
    position: absolute;
    width: calc(100% * var(--scale));
    height: calc(100% * var(--scale));
    border-radius: 50%;
    transform: rotate(calc(var(--direction) - 90deg));
  }

  span {
    --thickness: 0.5em;

    display: block;

    margin-left: 50%;
    margin-top: calc(50% - var(--thickness) / 2);
    width: 50%;
    height: var(--thickness);
    background-color: black;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  /* :root {
    --lumenosity: 0.75;
  }
  div {
    --thickness: 0.75em;
    --height: 0.75em;
    --position: calc(70% - var(--thickness) - var(--height));

    position: absolute;
    width: calc(100% * var(--scale));
    height: calc(100% * var(--scale));

    border-radius: 50%;
    background-image: radial-gradient(
      transparent calc(var(--position) - var(--thickness) - var(--height)),
      rgba(0, 0, 0, var(--lumenosity)) calc(var(--position) - var(--thickness)),
      rgba(255, 255, 255, var(--lumenosity)) calc(var(--position)),
      rgba(0, 0, 0, var(--lumenosity)) calc(var(--position) + var(--thickness)),
      transparent calc(var(--position) + var(--thickness) + var(--height))
    );
    background-blend-mode: luminosity;
    filter: blur(0.1em);
  }

  span {
    --position: 50%;
    --thickness: 0.25em;
    --height: 0.25em;

    display: block;
    border-radius: 25px;

    margin-left: 50%;
    margin-top: calc(50% - var(--thickness) - var(--height));
    width: 50%;
    height: calc(var(--thickness) * 2 + var(--height) * 2);

    background-image: linear-gradient(
      transparent calc(var(--position) - var(--thickness) - var(--height)),
      rgba(0, 0, 0, var(--lumenosity)) calc(var(--position) - var(--thickness)),
      rgba(255, 255, 255, var(--lumenosity)) calc(var(--position)),
      rgba(0, 0, 0, var(--lumenosity)) calc(var(--position) + var(--thickness)),
      transparent calc(var(--position) + var(--thickness) + var(--height))
    );
    mix-blend-mode: luminosity;
  } */
</style>
