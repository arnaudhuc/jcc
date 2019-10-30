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
  cardManaCost: {
    type: Object,
    required: true,
    arcane: {
      type: Number,
      required: true,
    },
    nature: {
      type: Number,
      required: true,
    },
    light: {
      type: Number,
      required: true,
    },
    shadow: {
      type: Number,
      required: true,
    },
    fell: {
      type: Number,
      required: true,
    },
    necro: {
      type: Number,
      required: true,
    },
    neutral: {
      type: Number,
      required: true,
    },
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
  effectManaCost: {
    type: Object,
  },
  effectDescription: {
    type: String,
    arcane: {
      type: Number,
    },
    nature: {
      type: Number,
    },
    light: {
      type: Number,
    },
    shadow: {
      type: Number,
    },
    fell: {
      type: Number,
    },
    necro: {
      type: Number,
    },
    neutral: {
      type: Number,
    },
  },
  deckId: {
    type: Number,
  },
  attribute: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model('cards', cardModel);
