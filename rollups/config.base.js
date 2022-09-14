import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const extensions = [".ts", ".js"];

const preventThreeShakingPlugin = () => {
  return {
    name: "no-threeshaking",
    resolveId(id, importer) {
      if (!importer) {
        return { id, moduleSideEffects: "no-treeshake" };
      }
      return null;
    },
  };
};

export default {
  input: "./src/index.ts",
  output: { dir: "clasp/test", format: "esm" },
  plugins: [
    preventThreeShakingPlugin(),
    nodeResolve({ extensions }),
    esbuild(),
  ],
};
