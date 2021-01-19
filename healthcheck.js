const fetch = require('node-fetch');

fetch('http://localhost:12345/healthcheck')
  .then(() => process.exit(0))
  .catch(() => process.exit(1))