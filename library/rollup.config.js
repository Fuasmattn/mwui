import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import packageJson from './package.json';

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.browser,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
  ]
};