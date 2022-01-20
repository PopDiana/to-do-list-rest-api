import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: 'Please input a description for the item',
    minlength: 2
  },
  list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'list'
  }
});

const Item = mongoose.model('item', itemSchema);

export default Item;
