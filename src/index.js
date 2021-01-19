const config = require('config');
const server = require('./server');

server.listen(config.port, (err) => {
  if (err) {
      server.log.error(err);
      console.log(err);
      process.exit(1);
  }
  server.log.info('Server Started');
});