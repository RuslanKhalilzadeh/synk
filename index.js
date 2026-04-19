const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CyberBridge Təhlükəsizlik Testi Aktivdir!');
});

app.listen(3000);
