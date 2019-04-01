# waxwing-rating
rating widget for the web

## installation
`npm install waxwing-rating`;

## usage
```html
<div id="container" class="rating-container"></div>
```

```js
const rating = new WW_Rating({
  target: document.querySelector("#container"),
  props: {
    title: "Rate your health",
    name: "health",
    value: 3,
    items: [
      {
        value: 1,
        text: "very bad"
      },
      {
        value: 2,
        text: "bad"
      },
      {
        value: 3,
        text: "normal"
      },
      {
        value: 4,
        text: "good"
      },
      {
        value: 5,
        text: "exelent"
      }
    ]
  }
});
```

## styles
you could override all styles via the css. For example:
```css
.rating-container .ww-rating__input:checked + .ww-rating__star svg {
  fill: tomato;
}
.rating-container .ww-rating__star:hover svg {
  stroke: gold;
}
```

## examples
please see:
https://plnkr.co/edit/VHoLBQzeEzSD5lDDEGdb?p=preview
https://github.com/dmitrykurmanov/waxwing-rating/blob/master/example/index.html

## how to build
* `git clone https://github.com/dmitrykurmanov/waxwing-rating.git`
* `npm install`
* `npm start`
* `npm test`

# Thanks to
[SveleJS](https://github.com/sveltejs/svelte)
[RollupJS](https://github.com/rollup/rollup)
[Ava](https://github.com/avajs/ava)

and [Vadim Makeev](https://www.youtube.com/watch?v=EbajTYI-gg8)
