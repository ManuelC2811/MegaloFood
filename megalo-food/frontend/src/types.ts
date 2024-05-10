import mongoose from "mongoose";

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
