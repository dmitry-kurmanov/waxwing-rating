<fieldset>
  {#each items as item}
  <input type="radio" name="{name}" value="{item.value}" />
  {/each}
</fieldset>

<script>
  import Nested from "./Nested.svelte";

  export let name = "";
  export let items = [];
</script>

<style>
  :global(form) {
    color: tomato;
  }
</style>
