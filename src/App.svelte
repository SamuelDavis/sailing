<script lang="ts">
  import DialControl from "./DialControl.svelte";
  import Needle from "./Needle.svelte";

  import RangeControl from "./RangeControl.svelte";
  import StackingContainer from "./StackingContainer.svelte";
  import { rudder, ship, water, wind } from "./store";
  import StoreTable from "./StoreTable.svelte";

  let svg: SVGSVGElement;
</script>

<main>
  <section>
    <h1>Controls</h1>
    <form on:submit|preventDefault>
      <fieldset>
        <legend>Direction</legend>
        <div>
          <RangeControl class="wind" id="wind" label="Wind" vector={wind} />
          <RangeControl class="water" id="water" label="Water" vector={water} />
          <RangeControl
            class="rudder"
            id="rudder"
            label="Rudder"
            vector={rudder}
          />
        </div>
        <StackingContainer class="container">
          <DialControl class="wind" vector={wind} />
          <DialControl class="water" vector={water} scale={0.8} />
          <DialControl class="rudder" vector={rudder} scale={0.6} />
          <Needle vector={ship} />
        </StackingContainer>
      </fieldset>
    </form>
  </section>

  <section>
    <h1>Output</h1>
    <StoreTable />
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

  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    place-items: center;
  }

  form fieldset {
    display: flex;
    align-content: space-around;
    gap: 1em;
  }

  form fieldset div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
