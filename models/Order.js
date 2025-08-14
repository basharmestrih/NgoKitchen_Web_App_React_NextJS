import mongoose from 'mongoose';

const extraSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { _id: false }); // prevent Mongoose from adding _id to each extra

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }, // ✅ Add quantity for each selected meal
  extras: [extraSchema]
});

const orderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  items: [itemSchema]
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
