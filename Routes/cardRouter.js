import express from 'express';
import Card from '../models/cardModel';
const cardRouter = express.Router();
cardRouter.route('/')
  .get((req, res) => {
    Card.find({}, (err, cards) => {
      res.json(cards)
    })
  })
  .post((req, res) => {
    let card = new Card(req.body);
    card.save();
    res.status(201).send(card)
  })

// Middleware
cardRouter.use('/:cardId', (req, res, next) => {
  Card.findById(req.params.cardId, (err, card) => {
    if (err)
      res.status(500).send(err)
    else {
      req.card = card;
      next()
    }
  })

})
cardRouter.route('/:cardId')
  .get((req, res) => {
    res.json(req.card)
  }) // end get Cards/:cardId
  .put((req, res) => {
    req.card.title = req.body.title;
    req.card.author = req.body.author;
    req.card.save()
    res.json(req.card)
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let p in req.body) {
      req.card[p] = req.body[p]
    }
    req.card.save()
    res.json(req.card)
  })//patch
  .delete((req, res) => {
    req.card.remove(err => {
      if (err) {
        res.status(500).send(err)
      }
      else {
        res.status(204).send('removed')
      }
    })
  })//delete

export default cardRouter;
