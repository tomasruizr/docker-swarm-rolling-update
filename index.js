const app = require('express')();
app.get('/', (req, res) => {
  console.log('respondiendo', req.query);
  res.send('Respuesta modificada');
});
setTimeout(() => {
  app.get('/healthcheck', (req, res) => {
    console.log('hice healthcheck');
    res.send('ok');
  });
  app.listen(12345, () => console.log('listening on 12345'))
}, 5000);