import scss from 'rollup-plugin-scss';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    scss({
      output: 'token-farm.bundle.scss'
    })

  ]
};
