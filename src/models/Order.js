import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    items: {
      type: [
        {
          name: { type: String, required: true, trim: true },
          quantity: { type: Number, default: 1, min: 1 },
          extras: {
            type: [
              {
                name: { type: String, required: true, trim: true },
                price: { type: Number, default: 0, min: 0 },
              },
            ],
            default: [],
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
