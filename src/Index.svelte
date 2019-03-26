<fieldset class="waxwing-rating">
  <legend class="waxwing-rating__title">{title}</legend>

  <div class="waxwing-rating__group">
    {#each items as item}
    <input
      type="radio"
      id="{getItemId(item.value)}"
      name="{name}"
      bind:group="{value}"
      value="{item.value}"
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

    <div class="waxwing-rating__focus"></div>
  </div>
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

  :global(.waxwing-rating) {
    user-select: none;
  }

  :global(.waxwing-rating__star):hover svg {
    stroke: goldenrod;
  }

  :global(.waxwing-rating__input):checked + .waxwing-rating__star svg {
    fill: gold;
  }

  :global(.waxwing-rating__group) {
    position: relative;
  }

  :global(.waxwing-rating__input:focus ~ .waxwing-rating__focus) {
    position: absolute;
    top: -0.2em;
    right: -0.2em;
    bottom: -0.2em;
    left: -0.2em;
    z-index: -1;
    outline: 0.1em solid #4d90fe;
  }
</style>
