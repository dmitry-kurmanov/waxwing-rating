<fieldset class="waxwing-rating">
  <legend class="waxwing-rating__title">{title}</legend>

  {#each items as item}

  <input
    type="radio"
    id="{getItemId(item.value)}"
    name="{name}"
    bind:group="{value}"
    value="{item.value}"
    aria-checked="{item.value === value}"
    class="waxwing-rating__input"
  />
  <label
    class="waxwing-rating__star"
    for="{getItemId(item.value)}"
    aria-label="{item.text || item.value}"
  >
    <Star></Star>
  </label>

  {/each}
</fieldset>

<script>
  import Star from "./Star.svelte";

  export let title = "";
  export let name = "";
  export let items = [];
  export let value = null;

  const getItemId = value => {
    return name + "-" + value;
  };
</script>

<style>
  :global(.waxwing-rating__input) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  :global(.waxwing-rating__star):hover svg {
    fill: orange;
  }

  :global(.waxwing-rating__input):checked + .waxwing-rating__star svg {
    fill: orange;
  }
</style>
