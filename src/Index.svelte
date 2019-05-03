<fieldset class="ww-rating">
  <legend class="ww-rating__title">{title}</legend>

  <div class="ww-rating__group">
    {#each items as item}
    <input
      type="radio"
      id="{getItemId(item.value)}"
      name="{name}"
      bind:group="{value}"
      value="{item.value}"
      class="{getClasses(value, item.value)}"
    />
    <label
      class="ww-rating__star"
      for="{getItemId(item.value)}"
      aria-label="{item.text || item.value}"
    >
      <Star></Star>
    </label>
    {/each}

    <div class="ww-rating__focus"></div>
  </div>
</fieldset>

<script>
  import Star from "./Star.svelte";

  export let title = "";
  export let name = "";
  export let items = [];
  export let value = null;

  export let colorPreviousValues = true;

  const getItemId = itemValue => {
    return name + "-" + itemValue;
  };

  const getClasses = (value, itemValue) => {
    var classes = "ww-rating__input";

    if (colorPreviousValues && itemValue <= value)
      classes += " ww-rating__input--checked";

    return classes;
  };
</script>

<style>
  :global(.ww-rating__input) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  :global(.ww-rating) {
    user-select: none;
  }

  :global(.ww-rating__star):hover svg {
    stroke: goldenrod;
  }

  :global(.ww-rating__input:checked + .ww-rating__star svg) {
    fill: gold;
  }

  :global(.ww-rating__input--checked + .ww-rating__star svg) {
    fill: gold;
  }

  :global(.ww-rating__group) {
    position: relative;
  }

  :global(.ww-rating__input:focus ~ .ww-rating__focus) {
    position: absolute;
    top: -0.2em;
    right: -0.2em;
    bottom: -0.2em;
    left: -0.2em;
    z-index: -1;
    outline: 0.1em solid #4d90fe;
  }
</style>
