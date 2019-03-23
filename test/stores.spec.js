import test from "ava";
import { Stores } from "./build/components.js";

test("store test", async t => {
  const countStore = Stores.count;
  let count = 0;

  countStore.set(count);
  countStore.set(++count);
  countStore.set(--count);

  const unsubscribe = countStore.subscribe(value => {
    t.is(value, count);
  });
  unsubscribe();
});
