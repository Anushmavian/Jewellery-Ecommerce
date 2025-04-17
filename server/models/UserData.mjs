import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
  firebaseUserId: { type: String, required: true, unique: true },
  cart: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }],
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.model('UserData', userDataSchema);
