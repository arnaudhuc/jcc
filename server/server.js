import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { cardRouter, deckRouter, playerRouter } from './Routes';

const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
const db = mongoose.connect(
  'mongodb://localhost/jcc',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      return console.error(err);
    }
  },
);
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
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/cards', cardRouter);
app.use('/api/decks', deckRouter);
app.use('/api/players', playerRouter);

// Running the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
