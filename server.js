import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Bundler from 'parcel-bundler';

import { cardRouter, deckRouter, playerRouter } from './Routes';

const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
mongoose
  .connect(
    'mongodb://localhost/jcc',
    // 'mongodb+srv://admin:pass1234@cluster0-3q8op.mongodb.net/jcc?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .catch(e => {
    console.error('Cannot connect to database', e);
  });
// const db = mongoose.connect('mongodb+srv://admin:pass1234@cluster0-3q8op.mongodb.net/jcc?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function(err) {
//     if (err){ return console.error(err)}
//   }
// );

// setting CORS
app.use(cors());

// setting body parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// API routes
app.use('/api/cards', cardRouter);
app.use('/api/decks', deckRouter);
app.use('/api/players', playerRouter);

const file = './front/index.html'; // Passe ici un chemin absolu vers le point d'entrée
const options = {}; // Voir la section des options de la doc de l'api, pour les possibilités

// Initialise un nouveau bundler en utilisant un fichier et des options
const bundler = new Bundler(file, options);
app.use(bundler.middleware());

// Running the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
