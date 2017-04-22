const config = require('./server/config/config');
const app = require('./server/server');

app.listen(config.port);
console.log('listening on http://localhost:' + config.port);