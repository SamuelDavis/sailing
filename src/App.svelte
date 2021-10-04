<script lang="ts">
  import { derived, writable } from "svelte/store";
  import RangeControl from "./RangeControl.svelte";
  import SvgControl from "./SVGControl.svelte";

  import { average, ROTATION_LIMIT, sum } from "./Util";
  import { Vector } from "./Vector";

  let svg: SVGSVGElement;

  const wind = writable(new Vector(15, 1));
  const water = writable(new Vector(30, 1));
  const rudder = writable(new Vector(45, 1));
  const ship = derived(
    [wind, water, rudder],
    ([wind, water, rudder]) =>
      new Vector(
        average(wind.direction, water.direction, rudder.direction),
        sum(wind.magnitude, water.magnitude, rudder.magnitude)
      )
  );
</script>

<main>
  <section>
    <h1>Controls</h1>
    <form on:submit|preventDefault>
      <RangeControl id="wind" label="Wind" vector={wind} />
      <RangeControl id="water" label="Water" vector={water} />
      <RangeControl id="rudder" label="Rudder" vector={rudder} />
    </form>
    <svg
      bind:this={svg}
      width="120"
      height="120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SvgControl
        vector={wind}
        radius={60}
        length={0}
        background="red"
        foreground="white"
      />
      <SvgControl
        vector={water}
        radius={40}
        length={20}
        background="green"
        foreground="black"
      />
      <SvgControl
        vector={rudder}
        radius={20}
        length={40}
        background="blue"
        foreground="orange"
      />
      <line
        x1="50%"
        y1="50%"
        x2="50%"
        y2="0%"
        stroke="yellow"
        stroke-width="3px"
        transform={`rotate(${$ship.direction})`}
      />
    </svg>
  </section>

  <section>
    <h1>Output</h1>
    <table>
      <thead>
        <tr>
          <th>index</th>
          <th>direction</th>
          <th>magnitude</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries( { wind: $wind, water: $water, rudder: $rudder, ship: $ship } ) as [index, vector]}
          <tr>
            <td>{index}</td>
            <td>{(vector.direction % ROTATION_LIMIT).toFixed(2)}</td>
            <td>{vector.magnitude.toFixed(2)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
</main>

<style lang="css">
  * {
    box-sizing: border-box;
  }

  main {
    display: flex;
    justify-content: space-around;
  }

  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    place-items: center;
  }

  form {
    display: grid;
    grid-template-columns: max-content auto;
  }

  table {
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.5em;
    border: 1px solid black;
  }

  :global(svg *) {
    transform-origin: 50% 50%;
  }
</style>
