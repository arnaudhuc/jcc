import express from 'express';

import { CardModel } from '../models';

const cardRouter = express.Router();

cardRouter
  .route('/')

  // GET
  .get((req, res) => {
    CardModel.find({}, (err, cards) => {
      res.json(cards);
    });
  })

  // POST
  .post((req, res) => {
    const card = new CardModel(req.body);
    card.save();
    res.status(201).send(card);
  });

// Middleware
cardRouter.use('/:cardId', (req, res, next) => {
  CardModel.findById(req.params.cardId, (err, card) => {
    if (err) res.status(500).send(err);
    else {
      req.card = card;
      next();
    }
  });
});

cardRouter
  .route('/:cardId')

  // GET Cards/:cardId
  .get((req, res) => {
    res.json(req.card);
  })

  // PUT
  .put((req, res) => {
    req.card.title = req.body.title;
    req.card.author = req.body.author;
    req.card.save();
    res.json(req.card);
  })

  // PATCH
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    // avoid for .. in, it has some low perf, better use Object.keys || Object.entries || Object.values
    for (const p in req.body) {
      req.card[p] = req.body[p];
    }
    req.card.save();
    res.json(req.card);
  })

  // DELETE
  .delete((req, res) => {
    req.card.remove(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('removed');
      }
    });
  });

export default cardRouter;
