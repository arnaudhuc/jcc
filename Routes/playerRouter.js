import express from 'express';
import Player from '../models/playerModel';

const playerRouter = express.Router();

playerRouter.route('/')
  .get((req, res) => {
    Player.find({}, (err, players) => {
      res.json(players);
    })
  })
  .post((req, res) => {
    let player = new Player(req.body);
    player.save();
    res.status(201).send(player);
  })
// Middleware
playerRouter.use('/:playerId', (req, res, next) => {
  Player.findById(req.params.playerId, (err, player) => {
    if (err)
      res.status(500).send(err)
    else {
      req.player = player;
      next()
    }
  })

})
playerRouter.route('/:playerId')
  .get((req, res) => {
    res.json(req.player)
  }) // end get Players/:playerId
  .put((req, res) => {
    req.player.title = req.body.title;
    req.player.author = req.body.author;
    req.player.save()
    res.json(req.player)
  })
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let p in req.body) {
      req.player[p] = req.body[p]
    }
    req.player.save()
    res.json(req.player)
  })//patch
  .delete((req, res) => {
    req.player.remove(err => {
      if (err) {
        res.status(500).send(err)
      }
      else {
        res.status(204).send('removed')
      }
    })
  })//delete

export default playerRouter;
