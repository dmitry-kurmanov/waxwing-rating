# waxwing-rating
rating widget for the web with accessibility and keyboard usage

## demos/examples
https://plnkr.co/edit/hjh2SEQSs7kLC6Wxu8c6?p=preview  
https://codesandbox.io/s/mj1rw2opwj  
https://github.com/dmitrykurmanov/waxwing-rating/blob/master/example/index.html  

## installation (npm): 
`npm install waxwing-rating`

## adding
```js
import WW_Rating from "waxwing-rating";
import "waxwing-rating/dist/waxwing-rating.css";
```
 
or with es5 style:  
 
```html
<link rel="stylesheet" href="https://unpkg.com/waxwing-rating@0.0.1/dist/waxwing-rating.css">
<script src="https://unpkg.com/waxwing-rating@0.0.1/dist/waxwing-rating.min.js"></script>
```

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

rating.title = "My New Title";
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

## how to build
* `git clone https://github.com/dmitrykurmanov/waxwing-rating.git`
* `npm install`
* `npm start`
* `npm test`

# Thanks to
[SvelteJS](https://github.com/sveltejs/svelte)  
[RollupJS](https://github.com/rollup/rollup)  
[AvaJS](https://github.com/avajs/ava)  
and [Vadim Makeev](https://www.youtube.com/watch?v=EbajTYI-gg8)
