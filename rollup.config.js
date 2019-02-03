import resolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom', 'prop-types'],
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' },
  ],
  plugins: [
    resolve(),
    autoExternal({ dependencies: true }),
    commonjs({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
};
