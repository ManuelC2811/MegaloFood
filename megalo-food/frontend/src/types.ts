import mongoose from "mongoose";

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
        required: true
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
    lastModifiedAttribute: { type: String } // Nuevo campo para almacenar el nombre del último atributo modificado
});

const User = mongoose.model("User", userSchema);

export default User;
