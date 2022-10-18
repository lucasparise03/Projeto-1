const db_mongoose = require('./config/db_mongoose');
const routes = require('./routers/route');
const mongoose = require('mongoose');
const express = require('express');
const unirest = require('unirest');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


mongoose.connect(db_mongoose.connection,{}).then(()=>{
    console.log('Conectado com o BD');
}).catch(()=>{
        console.log('Erro na conexão com o BD');
});

app.use(
    express.urlencoded({
      extended: true
    })
)

app.listen(8081, function(){
        console.log("Servidor no http://localhost:8081")
});


//var receitas = unirest.get('http://localhost:8081/api/receitas');
//console.log(receitas);

