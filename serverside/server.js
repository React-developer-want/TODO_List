// const express = require('express');
require('./db/connect.js')
// const app = express();
const app= require('./index')




app.listen(5000, () => {
  console.log('Server has started on port 5000');
});
