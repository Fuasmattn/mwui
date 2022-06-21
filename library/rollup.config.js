import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {})
  ]
})

export default [
  bundle({
    output: [
      {
        file: packageJson.browser,
        format: "esm",
        sourcemap: true
      },
    ],
    plugins: [
      typescript({ module: "ESNext" }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      babel({
        presets: ["@babel/preset-react"],
        extensions: [".js", ".ts", ".jsx", ".tsx"],
      }),
      commonjs(),
    ]
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  }),

];