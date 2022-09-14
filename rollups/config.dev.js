import alias from "@rollup/plugin-alias";
import config from "./config.base";

export default {
  ...config,
  output: { dir: "clasp/dev", format: "esm" },
  plugins: [
    alias({
      entries: [{ find: "./envs", replacement: "../envs/dev" }],
    }),
  ].concat(config.plugins),
};
