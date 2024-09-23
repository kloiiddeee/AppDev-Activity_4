const bodyParser = require("body-parser");
const express = require('express');
const homeroutes = require('./routes/homeroutes');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extend: true}));
app.use('/', homeroutes);
app.use(express.static('public'));

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});