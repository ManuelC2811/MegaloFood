import mongoose from "mongoose";

const userTraceabilitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const UserTraceability = mongoose.model("UserTraceability", userTraceabilitySchema);

export default UserTraceability;