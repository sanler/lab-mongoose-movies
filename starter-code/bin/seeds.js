// To insert in "bin/seeds.js"

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name : "Bugs Bunny",
    occupation: "Rabbit actor",
    catchPhrase: "Hola amigos!"
  },
  {
    name : "Mickey",
    occupation: "Mouse actor",
    catchPhrase: "Soy un ratón!"
  },
  {
    name : "Minnie",
    occupation: "Mouse actress",
    catchPhrase: "Hola soy Minnie!"
  }
  
];


Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });