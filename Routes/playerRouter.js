import express from 'express';

import { PlayerModel } from '../models';

const playerRouter = express.Router();

playerRouter
  .route('/')

  // GET
  .get((req, res) => {
    PlayerModel.find({}, (err, players) => {
      res.json(players);
    });
  })

  // POST
  .post((req, res) => {
    const player = new PlayerModel(req.body);
    player.save();
    res.status(201).send(player);
  });

// Middleware
playerRouter.use('/:playerId', (req, res, next) => {
  PlayerModel.findById(req.params.playerId, (err, player) => {
    if (err) res.status(500).send(err);
    else {
      req.player = player;
      next();
    }
  });
});

playerRouter
  .route('/:playerId')

  // GET Players/:playerId
  .get((req, res) => {
    res.json(req.player);
  })

  // PUT
  .put((req, res) => {
    req.player.title = req.body.title;
    req.player.author = req.body.author;
    req.player.save();
    res.json(req.player);
  })

  //PATCH
  .patch((req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (const p in req.body) {
      req.player[p] = req.body[p];
    }
    req.player.save();
    res.json(req.player);
  })

  // DELETE
  .delete((req, res) => {
    req.player.remove(err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('removed');
      }
    });
  });

export default playerRouter;
