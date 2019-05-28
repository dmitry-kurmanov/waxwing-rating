<Icons></Icons>

<fieldset class="ww-rating {isFocus ? 'ww-rating--focus' : ''}">
  <legend class="ww-rating__title {isFocus ? 'ww-rating__title--focus' : ''}">
    {title}
  </legend>

  <div class="ww-rating__group">
    {#each items as item}
    <input
      type="radio"
      id="{getItemId(item.value)}"
      name="{name}"
      bind:group="{value}"
      value="{item.value}"
      class="{getClasses(value, item.value)}"
      on:focus="{handleFocus}"
      on:blur="{handleBlur}"
    />
    <label
      class="ww-rating__star"
      for="{getItemId(item.value)}"
      aria-label="{item.text || item.value}"
    >
      <svg
        width="24px"
        height="24px"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use xlink:href="#ww-{icon}-svg" />
      </svg>
    </label>
    {/each}

    <div class="ww-rating__focus"></div>
  </div>
</fieldset>

<script>
  import Icons from "./Icons.svelte";

  export let title = "";
  export let name = "";
  export let items = [];
  export let value = null;

  export let colorPreviousValues = true;
  export let icon = "star";

  const getItemId = itemValue => {
    return name + "-" + itemValue;
  };

  const getClasses = (value, itemValue) => {
    var classes = "ww-rating__input";

    if (colorPreviousValues && itemValue <= value)
      classes += " ww-rating__input--checked";

    return classes;
  };

  let isFocus = false;

  const handleFocus = () => {
    isFocus = true;
  };

  const handleBlur = () => {
    isFocus = false;
  };
</script>

<style>
  :global(.ww-rating) {
    user-select: none;
    position: relative;
  }

  :global(.ww-rating--focus) {
    border-color: #4d90fe;
    border-style: solid;
  }

  :global(.ww-rating__title--focus) {
    color: #4d90fe;
  }

  :global(.ww-rating__input) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
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
</style>
