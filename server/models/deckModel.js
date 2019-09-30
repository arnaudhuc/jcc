import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const deckModel = new Schema({
  name: { type: String, required: true },
  cards: { type: Array },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('decks', deckModel);
