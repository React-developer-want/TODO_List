const express = require('express');
require('./db/connect.js')
const app = express();



app.listen(5000, () => {
  console.log('Server has started on port 5000');
});
