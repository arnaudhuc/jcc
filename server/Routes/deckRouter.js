import express from 'express';
import Deck from '../models/deckModel';

const deckRouter = express.Router();

deckRouter.route('/')
  .get((req, res) => {
    Deck.find({}, (err, decks) => {
      res.json(decks);
    })
  })
  .post((req, res) => {
    let deck = new Deck(req.body);
    deck.save();
    res.status(201).send(deck);
  })
// Middleware
deckRouter.use('/:deckId', (req, res, next) => {
  Deck.findById(req.params.deckId, (err, deck) => {
    if (err)
      res.status(500).send(err)
    else {
      req.deck = deck;
      next()
    }
  })

})
deckRouter.route('/:deckId')
  .get((req, res) => {
    res.json(req.deck)
  }) // end get Decks/:deckId
  .put((req, res) => {
    req.deck.title = req.body.title;
    req.deck.author = req.body.author;
    req.deck.save()
    res.json(req.deck)
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let p in req.body) {
      req.deck[p] = req.body[p]
    }
    req.deck.save()
    res.json(req.deck)
  })//patch
  .delete((req, res) => {
    req.deck.remove(err => {
      if (err) {
        res.status(500).send(err)
      }
      else {
        res.status(204).send('removed')
      }
    })
  })//delete

export default deckRouter;
