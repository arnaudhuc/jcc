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
    required: true,
  },
  natureManaCost: {
    type: Number,
    required: true,
  },
  lightManaCost: {
    type: Number,
    required: true,
  },
  shadowManaCost: {
    type: Number,
    required: true,
  },
  fellManaCost: {
    type: Number,
    required: true,
  },
  necroManaCost: {
    type: Number,
    required: true,
  },
  neutralManaCost: {
    type: Number,
    required: true,
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
