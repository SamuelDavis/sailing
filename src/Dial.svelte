<script lang="ts">
  import type { Readable } from "svelte/store";
  import {
    deriveHypotenuse,
    isWritable,
    MAX_MAGNITUDE,
    toCssVars,
    Vector,
  } from "./Util";

  export let maxMagnitude: number = MAX_MAGNITUDE;
  export let size: number = 50;
  export let vector: Readable<Vector>;

  $: vars = toCssVars({
    direction: `${-$vector.direction}rad`,
    magnitude: $vector.magnitude / maxMagnitude,
    size: `${size}px`,
  });

  let el: HTMLDivElement;
  let focus: boolean = false;

  function setFocus(value: boolean) {
    focus = isWritable(vector) && value;
    if (focus) {
      window.document.body.classList.add("no-select");
    } else {
      window.document.body.classList.remove("no-select");
    }
  }

  function onDeriveVector(event: PointerEvent) {
    if (event.pressure < 0.1) setFocus(false);
    if (!focus) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.x - rect.width / 2;
    const y = -(event.clientY - rect.y - rect.height / 2); // browser treats top as 0
    $vector.direction = Math.atan2(y, x);

    let m = deriveHypotenuse(x, y);
    m = m / (size / 2); // get value as fraction of element size
    m = Math.min(maxMagnitude, m * maxMagnitude); // get value as fraction of max magnitude
    $vector.magnitude = m;
  }
</script>

<svelte:window on:pointermove={onDeriveVector} />

<div
  bind:this={el}
  style={vars}
  on:pointerdown={setFocus.bind(null, true)}
  {...$$restProps}
>
  <hr />
</div>

<style lang="css">
  :root {
    --direction: 0rad;
    --magnitude: 1;
    --needle: 2px;
    --size: 25px;
  }
  div {
    transform: rotate(var(--direction));

    width: var(--size);
    height: var(--size);

    display: inline-block;

    border-width: 1px;
    border-radius: 50%;
    border-style: solid;
    border-color: black;
  }
  hr {
    width: calc(50% * var(--magnitude));

    margin-left: 50%;
    margin-top: calc(50% - var(--needle));

    border-width: var(--needle);
    border-style: dotted;
  }
</style>
