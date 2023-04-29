const express= require('express');
const app= express();
const taskRouters= require('./routers/task-routers');
const cors= require('cors');
const morgan= require('morgan');

// -------------MIDDLEWARE----------
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ------------ROUTERS----------------
app.use('/api/v1/tasks', taskRouters);
// Second argument here is the child routes coming from there

module.exports= app;