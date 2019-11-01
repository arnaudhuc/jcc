import express from 'express';

import { DeckModel } from '../models';

const deckRouter = express.Router();

deckRouter
  .route('/')

  // GET
  .get((req, res) => {
    DeckModel.find({}, (err, decks) => {
      res.json(decks);
    });
  })

  // POST
  .post((req, res) => {
    const deck = new DeckModel(req.body);
    deck.save();
    res.status(201).send(deck);
  });

// Middleware
deckRouter.use('/:deckId', (req, res, next) => {
  DeckModel.findById(req.params.deckId, (err, deck) => {
    if (err) res.status(500).send(err);
    else {
      req.deck = deck;
      next();
    }
  });
});

deckRouter
  .route('/:deckId')

  // GET Decks/:deckId
  .get((req, res) => {
    res.json(req.deck);
  })

  // PUT
  .put((req, res) => {
    req.deck.title = req.body.title;
    req.deck.author = req.body.author;
    req.deck.save();
    res.json(req.deck);
  })

  // PATCH
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (const p in req.body) {
      req.deck[p] = req.body[p];
    }
    req.deck.save();
    res.json(req.deck);
  })

  // DELETE
  .delete((req, res) => {
    req.deck.remove(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('removed');
      }
    });
  });

export default deckRouter;
