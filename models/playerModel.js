import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const playerModel = new Schema({
  name: {type: String, required: true},
  deck: {type: Array},
  password: {type: String, required: true}
});

export default mongoose.model('players', playerModel);
