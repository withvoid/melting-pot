import resolve from 'rollup-plugin-node-resolve';

const dist = 'dist';
const getOutputFileByFormatType = type => `${dist}/bundle.${type}.js`;

export default {
  input: 'src/index.js',
  output: [
    {
      file: getOutputFileByFormatType('cjs'),
      format: 'cjs',
    },
    {
      file: getOutputFileByFormatType('esm'),
      format: 'esm', // same as 'es' (shorthand)
    },
    {
      name: 'TheHooks',
      file: getOutputFileByFormatType('umd'),
      format: 'umd',
    },
  ],
  plugins: [resolve()],
};
