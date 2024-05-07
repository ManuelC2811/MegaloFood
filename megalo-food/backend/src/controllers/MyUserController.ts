import { Request, Response } from "express";
import User from "../models/user";

const getCurrentUser = async (req: Request, res: Response) => {
    try{
        const currentUser = await User.findOne({ _id: req.userId });
        if (!currentUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(currentUser);
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: "Algo salió mal" });
    }
}

const createCurrentUser = async (req: Request, res: Response) => {
    try{
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });

        if(existingUser) {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        newUser.lastUpdated = new Date();
        newUser.creationDate = new Date();
        await newUser.save();

        res.status(201).json(newUser.toObject());
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Error en la creación de usuario" });
    }
};

const updateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, country, city } = req.body;
        const user = await User.findById(req.userId);

        if(!user){
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;
        user.lastUpdated = new Date();
        await user.save();

        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en la actualización de usuario" });
    }
}

export default {
    getCurrentUser,
    createCurrentUser,
    updateCurrentUser,
};
