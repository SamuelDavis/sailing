<script lang="ts">
  import RangeControl from "./RangeControl.svelte";
  import { rudder, ship, water, wind } from "./store";
  import SvgControl from "./SVGControl.svelte";

  import { ROTATION_LIMIT } from "./Util";

  let svg: SVGSVGElement;
</script>

<main>
  <section>
    <h1>Controls</h1>
    <form on:submit|preventDefault>
      <RangeControl class="wind" id="wind" label="Wind" vector={wind} />
      <RangeControl class="water" id="water" label="Water" vector={water} />
      <RangeControl class="rudder" id="rudder" label="Rudder" vector={rudder} />
    </form>
    <svg
      bind:this={svg}
      width="120"
      height="120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SvgControl class="wind" vector={wind} radius={60} length={0} />
      <SvgControl class="water" vector={water} radius={40} length={20} />
      <SvgControl class="rudder" vector={rudder} radius={20} length={40} />
      <line
        class="ship"
        x1="50%"
        y1="50%"
        x2="50%"
        y2="0"
        stroke-linecap="round"
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
            <td>{vector.direction.toFixed(2)}&deg;</td>
            <td>{vector.magnitude.toFixed(2)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <section style="height: 1000px;">hello</section>
</main>
