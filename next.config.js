const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nchmn907',
        mongodb_password: 'Mm5XVphIUiKfkAa7',
        mongobd_clustername: 'cluster0',
        mongodb_database: 'my-blog',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'nchmn907',
      mongodb_password: 'Mm5XVphIUiKfkAa7',
      mongobd_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };
};
