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

        let lastModifiedAttribute = "";

        // Verificar qué atributo se ha modificado
        if (name !== undefined && name !== user.name) {
            lastModifiedAttribute = "name";
            user.name = name;
        }
        if (addressLine1 !== undefined && addressLine1 !== user.addressLine1) {
            lastModifiedAttribute = "addressLine1";
            user.addressLine1 = addressLine1;
        }
        if (country !== undefined && country !== user.country) {
            lastModifiedAttribute = "country";
            user.country = country;
        }
        if (city !== undefined && city !== user.city) {
            lastModifiedAttribute = "city";
            user.city = city;
        }

        if (lastModifiedAttribute === "") {
            return res.status(400).json({ message: "No se proporcionaron datos para actualizar o los datos son iguales a los existentes" });
        }

        // Actualizar la fecha de última modificación y el último atributo modificado
        user.lastUpdated = new Date();
        user.lastModifiedAttribute = lastModifiedAttribute;

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
