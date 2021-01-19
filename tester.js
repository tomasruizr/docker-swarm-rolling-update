const fetch = require('node-fetch');
let count = 0;
setInterval(() => {
  fetch(`http://localhost:12345?id=${++count}`)
    .then(response=>response.text())
    .then(r=>console.log(r, count))
    .catch(console.error)
}, 500);