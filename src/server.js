const express = require ('express');
const mongoose=require('mongoose');

const app= express();
app.set('port', process.env.PORT || 9000)


const user='mgl';
const password='michi123';
const dbname='michiapi'
const uri=`mongodb+srv://${user}:${password}@cluster0.ptcr7.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true  
   })
   .then(()=>console.log('base de datos creada'))
   .catch(e => console.log(e))

const routes = require('./routes/routes');



//middlewares
app.use('/michis', routes);
app.use(express.json())


app.listen(9000, ()=>{
    console.log('server listen on', app.get('port'))
})

