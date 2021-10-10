<script lang="ts">
  import { rudder, ship, water, wind } from "./store";
</script>

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

<style lang="css">
  table {
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.5em;
    border: 1px solid black;
  }
</style>
