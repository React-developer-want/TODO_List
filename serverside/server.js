const app= require('./index')
require('./db/connect.js')

app.listen(5000, () => {
  console.log('Server has started on port 5000');
});
