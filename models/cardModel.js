import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardModel = new Schema({
	name: { type: String, required: true },
  arcaneManaCost: { type: Number },
  natureManaCost: { type: Number },
  lightManaCost: { type: Number },
  shadowManaCost: { type: Number },
  fellManaCost: { type: Number },
	necroManaCost: { type: Number },
	neutralManaCost: { type: Number },
  cardType: { type: String },
  class: { type: String },
  position: { type: String },
  attack: { type: Number },
  defense: { type: Number },
  life: { type: Number },
  mana: { type: Number },
  effect: { type: String },
	deckId: { type: Number }
});
export default mongoose.model('cards', cardModel)
