import test from "ava";
import { WW_Rating } from "./build/components.js";

test("passed name property", async t => {
  const name = "My Name";

  const rating = new WW_Rating({
    target: document.body,
    props: {
      name: name
    }
  });

  t.is(rating.name, "My Name");
});
