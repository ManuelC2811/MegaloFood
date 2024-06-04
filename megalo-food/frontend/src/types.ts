import mongoose from "mongoose";

export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
  rol: string;
};

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
  description: string;
  // imageUrl: string;
};

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
  creationDate: string;
};

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered"
  | "cancelled";

export type Order = {
  _id: string;
  restaurant: Restaurant;
  user: User;
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    addressLine1: string;
    city: string;
    email: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  restaurantId: string;
};

export type RestaurantSearchResponse = {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  lastUpdated: { type: Date, required: true },
  creationDate: { type: Date, required: true },
  lastLogin: { type: Date },
  lastModifiedAttribute: { type: String }, // Nuevo campo para almacenar el nombre del último atributo modificado
});

const User = mongoose.model("User", userSchema);

export default User;
