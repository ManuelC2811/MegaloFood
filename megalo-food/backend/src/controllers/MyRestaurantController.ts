import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import { logRestaurantActivity } from "./MyRestaurantTraceabilityController";

const getMyRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });
    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }
    res.json(restaurant);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching restaurant" });
  }
};

const createMyRestaurant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Restaurant.findOne({ user: req.userId });

    if (existingRestaurant) {
      return res
        .status(409)
        .json({ message: "User restaurant already exists" });
    }

    const imageUrl = await uploadImage(req.file as Express.Multer.File);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = imageUrl;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();
    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateMyRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({
      user: req.userId,
    });

    if (!restaurant) {
      return res.status(404).json({ message: "restaurant not found" });
    }
    let lastModifiedAttribute = [];
  if (restaurant.restaurantName !== undefined && restaurant.restaurantName !== req.body.restaurantName) {
    lastModifiedAttribute.push("name: "+restaurant.restaurantName+"="+req.body.restaurantName);
    restaurant.restaurantName = req.body.restaurantName;
    }
  if (restaurant.city !== undefined && restaurant.city !== req.body.city) {
    lastModifiedAttribute.push("city: "+restaurant.city+"="+req.body.city);
    restaurant.city = req.body.city;
  }
  if (restaurant.country !== undefined && restaurant.country !== req.body.country) {
    lastModifiedAttribute.push("country: "+restaurant.country+"="+req.body.country);
    restaurant.country = req.body.country;
  }
  if (restaurant.deliveryPrice != undefined && restaurant.deliveryPrice != req.body.deliveryPrice) {
    lastModifiedAttribute.push("deliveryPrice: "+restaurant.deliveryPrice+"="+req.body.deliveryPrice);
    restaurant.deliveryPrice = req.body.deliveryPrice;
  }
  if (restaurant.estimatedDeliveryTime != undefined && restaurant.estimatedDeliveryTime != req.body.estimatedDeliveryTime) {
    lastModifiedAttribute.push("estimatedDeliveryTime: "+restaurant.estimatedDeliveryTime+"="+req.body.estimatedDeliveryTime);
    restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
  }
  if (restaurant.cuisines != undefined && restaurant.cuisines != req.body.cuisines) {
    lastModifiedAttribute.push("cuisines: "+restaurant.cuisines+"="+req.body.cuisines);
    restaurant.cuisines = req.body.cuisines;
  }
  if (restaurant.menuItems !== undefined && restaurant.menuItems !== req.body.menuItems ) {
    restaurant.menuItems = req.body.menuItems;
    lastModifiedAttribute.push("menuItems");
  }
    restaurant.lastUpdated = new Date();
    restaurant.lastModifiedAttribute = lastModifiedAttribute;
    if (req.file) {
      const imageUrl = await uploadImage(req.file as Express.Multer.File);
      restaurant.imageUrl = imageUrl;
    }

    await restaurant.save();
    await logRestaurantActivity(restaurant._id.toString(), restaurant.restaurantName, lastModifiedAttribute, 'Actualización del restaurante');
    res.status(200).send(restaurant);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Algo salió mal" });
  }
};

const uploadImage = async (file: Express.Multer.File) => {
  const image = file;
  const base64Image = Buffer.from(image.buffer).toString("base64");
  const dataURI = `data:${image.mimetype};base64,${base64Image}`;

  const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
  return uploadResponse.url;
};

export default {
  getMyRestaurant,
  createMyRestaurant,
  updateMyRestaurant,
};
