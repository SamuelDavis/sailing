<script lang="ts">
  import { derived, writable } from "svelte/store";
  import ControlRow from "./ControlRow.svelte";
  import { deriveHypotenuse, MAX_MAGNITUDE, Vector } from "./Util";

  const wind = writable(new Vector(0, 1));
  const water = writable(new Vector(0, 1));
  const sails = writable(new Vector(0, 1));
  const rudder = writable(new Vector(0, 1));
  const sources = [wind, water, sails, rudder];
  const ship = derived(sources, (vectors) => {
    let x = 0;
    let y = 0;
    for (const vector of vectors) {
      x += Math.cos(vector.direction) * vector.magnitude;
      y += Math.sin(vector.direction) * vector.magnitude;
    }
    const d = Math.atan2(y, x);
    const m = deriveHypotenuse(x, y);

    return new Vector(d, m);
  });
</script>

<main>
  <form>
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Direction</th>
          <th>Magnitude</th>
          <th>Facing</th>
        </tr>
      </thead>
      <tbody>
        <ControlRow class="wind" vector={wind} label="Wind" />
        <ControlRow class="water" vector={water} label="Water" />
        <ControlRow class="sails" vector={sails} label="Sails" />
        <ControlRow class="rudder" vector={rudder} label="Rudder" />
        <ControlRow
          class="ship"
          vector={ship}
          maxMagnitude={MAX_MAGNITUDE * sources.length}
          label="Ship"
        />
      </tbody>
    </table>
  </form>
</main>

<style lang="css">
  table {
    border-collapse: collapse;
  }
  :global(th),
  :global(td) {
    border: 1px solid black;
    padding: 0.5em;
  }

  main {
    display: grid;
    place-content: center;
    width: 100vw;
    height: 100vh;
  }
</style>
