import alias from "@rollup/plugin-alias";
import config from "./config.base";

export default {
  ...config,
  output: { dir: "clasp/prod", format: "esm" },
  plugins: [
    alias({
      entries: [{ find: "./envs", replacement: "../envs/prod" }],
    }),
  ].concat(config.plugins),
};
