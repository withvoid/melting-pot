import resolve from 'rollup-plugin-node-resolve';

const dist = 'dist';
const getOutputFileByFormatType = type => `${dist}/melting-pot.${type}.js`;

export default {
  input: 'src/index.js',
  external: ['react'],
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
      name: 'MeltingPot',
      file: getOutputFileByFormatType('umd'),
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [resolve()],
};
