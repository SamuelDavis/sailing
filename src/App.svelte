<script lang="ts">
  import DialControl from "./DialControl.svelte";
  import Needle from "./Needle.svelte";

  import StackingContainer from "./StackingContainer.svelte";
  import { rudder, ship, water, wind } from "./store";
  import TableRow from "./TableRow.svelte";
</script>

<main>
  <section>
    <form on:submit|preventDefault>
      <StackingContainer class="container">
        <DialControl class="wind" vector={wind} />
        <DialControl class="water" vector={water} scale={0.7} />
        <DialControl class="rudder" vector={rudder} scale={0.4} />
        <Needle class="ship" vector={ship} />
      </StackingContainer>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>direction</th>
            <th>magnitude</th>
          </tr>
        </thead>
        <tbody>
          <TableRow vector={wind} class="wind" label="Wind" />
          <TableRow vector={water} class="water" label="Water" />
          <TableRow vector={rudder} class="rudder" label="Rudder" />
          <TableRow
            vector={ship}
            class="ship"
            label="Ship"
            interactive={false}
          />
        </tbody>
      </table>
    </form>
  </section>
</main>

<style lang="css">
  :root {
    --size: 25vw;
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

  main {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    place-items: center;
  }

  table {
    border-collapse: collapse;
  }

  * :global(th),
  * :global(td) {
    padding: 0.5em;
    border: 1px solid black;
  }

  form {
    display: flex;
    gap: 4em;
    flex-basis: 50%;
  }
</style>
