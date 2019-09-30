import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardModel = new Schema({
  number: { type: Number, required: true },
  name: { type: String, required: true },
  arcaneManaCost: { type: Number },
  natureManaCost: { type: Number },
  lightManaCost: { type: Number },
  shadowManaCost: { type: Number },
  fellManaCost: { type: Number },
  necroManaCost: { type: Number },
  neutralManaCost: { type: Number },
  type: { type: String, required: true },
  class: { type: Array, required: true },
  position: { type: String },
  attack: { type: Number },
  defense: { type: Number },
  life: { type: Number },
  mana: { type: Number },
  effect: { type: String },
  deckId: { type: Number },
});
export default mongoose.model('cards', cardModel);
