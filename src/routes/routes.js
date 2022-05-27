const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router()
const michiSchema = require('../models/michis')


const jsonParser = bodyParser.json();



routes.get('/',(req, res)=>{
michiSchema.find()
.then((data) => res.json(data))
.catch((error)=>res.json({message:error}));

})

routes.get('/:id',(req, res)=>{
   const {id} =req.params
   michiSchema.findById(id)
   .then((data) => res.json(data))
   .catch((error)=>res.json({message:error}));
})




routes.post('/',jsonParser, (req, res)=>{
const michi = michiSchema(req.body)
michi
.save()
.then((data)=>{res.json(data)})
.catch((error)=>
   res.json({message:error}))
})
      

routes.put('/:id', jsonParser ,(req, res)=>{
   const {id} =req.params;
   const {raza, aniosVida, description, random} = req.body
   michiSchema.updateOne({_id: id},{ $set: {raza,aniosVida, description, random}})
   .then((data) => res.json(data))
   .catch((error)=>res.json({message:error}));
})

routes.delete('/:id',(req, res)=>{
   const {id} =req.params;
   michiSchema.deleteOne({_id:id})
   .then((data) => res.json(data))
   .catch((error)=>res.json({message:error}));
})

module.exports= routes;