<script lang="ts">
  import DialControl from "./DialControl.svelte";
  import Needle from "./Needle.svelte";

  import RangeControl from "./RangeControl.svelte";
  import StackingContainer from "./StackingContainer.svelte";
  import { rudder, ship, water, wind } from "./store";

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

    <StackingContainer class="container">
      <DialControl class="wind" vector={wind} />
      <DialControl class="water" vector={water} scale={0.8} />
      <DialControl class="rudder" vector={rudder} scale={0.6} />
      <Needle vector={ship} />
    </StackingContainer>
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
          <tr class={index}>
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

<style lang="css">
  :root {
    --size: 20vw;
  }
  * :global(.container) {
    width: var(--size);
    height: var(--size);
    background-color: gray;
    border-radius: 50%;
  }

  * :global(.container > *) {
    position: absolute;
  }
</style>
