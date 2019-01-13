import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createPlugin } from 'docz-core';
/**
 * import { createPlugin } from 'docz-core';
 * 'docz-core' is a peer-dependecy of docz
 *
 * Reference for doczPluginNetlify
 * https://github.com/nicholasess/docz-plugin-netlify
 */

const doczPluginNetlify = () => {
  createPlugin({
    onPostBuild: config => {
      fs.writeFileSync(`./${config.dest}/_redirects`, '/*    /index.html   200', {
        encoding: 'utf8',
      });
    },
  });
};

export default {
  title: 'Melting Point',
  description: 'A utility library for daily use.',
  source: './docs',
  debug: false,
  theme: 'docz-theme-default',
  themeConfig: {
    mode: 'dark',
    colors: {
      primary: 'tomato',
    },
  },
  plugins: [doczPluginNetlify()],
};
