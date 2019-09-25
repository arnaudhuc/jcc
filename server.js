import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cardRouter from './Routes/cardRouter';
const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
const db = mongoose.connect('mongodb+srv://admin:pass1234@cluster0-3q8op.mongodb.net/card?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// setting body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/cards', cardRouter);

// Running the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

