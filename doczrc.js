import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createPlugin } from 'docz-core';
/**
 * import { createPlugin } from 'docz-core';
 * 'docz-core' is a peer-dependecy of docz
 *
 * Reference for doczPluginNetlify
 * https://github.com/nicholasess/docz-plugin-netlify
 *
 * Inspired on
 * Rewrite rule: /index.html 200
 * Reference: https://www.netlify.com/docs/redirects/#rewrites-and-proxying
 */

const doczPluginNetlify = () => {
  return createPlugin({
    onPostBuild: config => {
      const { dest } = config;
      fs.writeFileSync(`./${dest}/_redirects`, '/*    /index.html   200', {
        encoding: 'utf8',
      });
    },
  });
};

export default {
  title: 'Melting Pot',
  description: 'A utility library for daily use.',
  src: './docs',
  debug: true,
  themeConfig: {
    mode: 'dark',
    colors: {
      primary: '#CC1F2D',
    },
  },
  codeSandbox: false,
  plugins: [doczPluginNetlify()],
};
