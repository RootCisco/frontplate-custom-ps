'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function(production) {
  global.FRP_TPL_TYPE = 'pug_styl',  // not changed
  global.FRP_SRC = 'src';
  global.FRP_DEST = `${__dirname}/public`;
  return {
    clean: {
      src: '${FRP_SRC}'
    },
    html: {},
    style: production ? {} : {},
    script: production ? {} : {},
    server: {},
    copy: {
      [`${FRP_SRC}/img/**/*`]: `${FRP_DEST}/assets/image`
    },
    sprite: [],
    test: {}
  }
};
