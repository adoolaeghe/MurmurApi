import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


let app = express();
import Mur from './models/mur'

app.use(bodyParser.json())

// Connect to mongoose
mongoose.connect('mongodb://localhost/MURMUR_TEST')
let db = mongoose.connection


app.get('/', function(req,res){
  res.send("Please use the specified api routes")
});

/// MURS API
app.get('/mur/all', function(req,res){
  Mur.getAllMurs(function(err, murs){
    if(err) {
      throw err;
    }
    res.json(murs)
  });
});

/// MUR API
app.post('/mur', (req,res) => {
  let mur = req.body;
  Mur.addMur(mur, function(err, mur){
    if(err) {
      throw err;
    }
    res.json(mur);
  })
});

/// UPDATE NEW MUR
app.put('/mur/:id', (req,res) => {
  Mur.updateMur(req.params.id, req.body, res, function(err, mur){
    if(err) {
      throw err;
    }
  })
});

/// GET A MUR BY ID
app.get('/mur/:id', (req,res) => {
  Mur.getMur(req.params.id, res, function(err, mur){
    if(err) {
      throw err;
    }
  })
})

app.delete('/mur/:id', (req,res) => {
  Mur.deleteMur(req.params.id, res, function(err, mur){
    if(err) {
      throw err;
    }
  })
})

app.put('/mur/:id/buyshare', (req, res) => {
  Mur.buyShare(req.params.id, res, function(err, mur) {
    if(err) {
      throw err;
    }
  })
})

/// USER API

app.post('/user', (req,res) => {

});

app.get('/user/login', (req,res) => {

});

app.get('/user/logout', (req,res) => {

});

app.get('/user/:username', (req,res) => {

});

app.put('/user/:username', (req,res) => {

});

app.delete('/user/:username', (req,res) => {

});

app.listen(3000)
console.log('Running on port 3000')
