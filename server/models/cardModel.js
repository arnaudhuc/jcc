import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cardModel = new Schema({
  number: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  arcaneManaCost: {
    type: Number,
  },
  natureManaCost: {
    type: Number,
  },
  lightManaCost: {
    type: Number,
  },
  shadowManaCost: {
    type: Number,
  },
  fellManaCost: {
    type: Number,
  },
  necroManaCost: {
    type: Number,
  },
  neutralManaCost: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
  },
  class: {
    type: Array,
    required: true,
  },
  position: {
    type: String,
  },
  attack: {
    type: Number,
  },
  defense: {
    type: Number,
  },
  life: {
    type: Number,
  },
  mana: {
    type: Number,
  },
  effectDescription: {
    type: String,
  },
  effectarcaneManaCost: {
    type: Number,
  },
  effectnatureManaCost: {
    type: Number,
  },
  effectlightManaCost: {
    type: Number,
  },
  effectshadowManaCost: {
    type: Number,
  },
  effectfellManaCost: {
    type: Number,
  },
  effectnecroManaCost: {
    type: Number,
  },
  effectneutralManaCost: {
    type: Number,
  },
  deckId: {
    type: Number,
  },
  attribute: {
    type: String,
    required: true,
  },
});

export default mongoose.model('cards', cardModel);
