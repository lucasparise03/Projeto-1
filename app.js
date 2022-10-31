const express = require('express');
const app = express();
const routes = require('./routers/route');
const handlebars = require('express-handlebars');
app.use('/public', express.static('public'));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.use(routes);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.contentType('json')
    next();
});

app.listen(process.env.port || 3000);


console.log('Running at Port 3000');