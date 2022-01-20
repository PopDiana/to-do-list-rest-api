import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please input a name for the list',
    minlength: 2
  }
}, { toJSON: { virtuals: true } });

listSchema.virtual('items', {
  ref: 'item',
  localField: '_id',
  foreignField: 'list'
})

const List = mongoose.model('list', listSchema);

export default List;
