import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import svelte from "rollup-plugin-svelte";
import buble from "rollup-plugin-buble";

import del from "rollup-plugin-delete";
import assetSync from "rollup-plugin-asset-sync";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";

const name = "WW_Rating";
const production = !process.env.ROLLUP_WATCH;

const banner =
  "/** \n* " + name + "\n* v" + pkg.version + "\n* by " + pkg.author + " \n*/";

const config = {
  input: "src/Index.svelte",
  output: [
    { file: pkg.module, format: "es", banner },
    {
      file: pkg.main,
      format: "umd",
      name,
      amd: {
        id: pkg.name
      },
      banner
    }
  ],
  plugins: [
    del({
      targets: ["dist/*", "example/build/*"]
    }),
    svelte({
      dev: !production,
      shared: production,
      accessors: true,
      css: css => {
        css.write("dist/" + pkg.name + ".css");
      }
    }),
    resolve(), // so Rollup can find 3dparty modules in `node_modules`
    commonjs(), // so Rollup can convert 3dparty modules in `node_modules` to an ES module
    buble(),
    !production &&
      livereload({
        watch: "dist"
      }),
    !production &&
      serve({
        contentBase: "example",
        host: "localhost",
        port: 5000
      })
  ]
};

const minConfig = {
  input: pkg.main,
  output: [
    {
      file: pkg.main.replace(".js", ".min.js"),
      format: "umd",
      sourcemap: false
    }
  ],
  plugins: [
    uglify(),
    assetSync({
      input: "dist",
      output: "example/build"
    })
  ]
};

const testConfig = {
  input: "test/build.js",
  output: [{ file: "test/build/components.js", format: "cjs" }],
  plugins: [
    del({
      targets: ["test/build/components.js", "test/build/components.js.map"]
    }),
    svelte({
      accessors: true
    }),
    resolve(), // so Rollup can find 3dparty modules in `node_modules`
    commonjs(), // so Rollup can convert 3dparty modules in `node_modules` to an ES module
    buble()
  ]
};

export default [config, testConfig, minConfig];
