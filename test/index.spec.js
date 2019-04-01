import test from "ava";
import { WW_Rating } from "./build/components.js";

test("get/set name property", async t => {
  const name = "My Name";

  const rating = new WW_Rating({
    target: document.body,
    props: {
      name: name
    }
  });

  t.is(rating.name, "My Name");

  rating.name = "New Name";

  t.is(rating.name, "New Name");
});

test("get/set title property", async t => {
  const title = "My Title";

  const rating = new WW_Rating({
    target: document.body,
    props: {
      title: title
    }
  });

  t.is(rating.title, "My Title");

  rating.title = "New Title";

  t.is(rating.title, "New Title");
});

test("get/set value property", async t => {
  const value = 3;

  const rating = new WW_Rating({
    target: document.body,
    props: {
      value: value
    }
  });

  t.is(rating.value, 3);

  rating.value = 4;

  t.is(rating.value, 4);
});

test("get/set items property", async t => {
  const items = [
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
      value: 5
    }
  ];

  const rating = new WW_Rating({
    target: document.body,
    props: {
      items: items
    }
  });

  t.deepEqual(rating.items, [
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
      value: 5
    }
  ]);

  rating.items = [];

  t.deepEqual(rating.items, []);
});
