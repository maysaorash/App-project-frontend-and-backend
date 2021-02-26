const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const cors = require('cors')
require("./app/config/db.config.js");
const router = require("./app/routes/db.routes.js");

// let corsOptions = {
//     origin: "http://127.0.0.1:5500", //This is for frontend
//     optionsSuccessStatus: 200 // For legacy browser support
//     };
const corsOptions = {
    origin: process.env.ORIGIN || 'http://localhost:3000',
  };
  
 app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/customers', router);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port port!`))