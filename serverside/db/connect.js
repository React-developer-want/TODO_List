const mongoose = require('mongoose');
require('dotenv').config();

const uri= process.env.DB_LINK.replace(
'<password>', process.env.DB_PASSWORD
);

mongoose.connect(uri).then(()=>{
    console.log('DB connected successfully')
}).catch((err)=>{
    console.log('Error detected', err)
})