// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'star-wars',
  remotes: ['films', 'planets', 'starships'],
};

module.exports = moduleFederationConfig;
