import mongoose from "mongoose";

const restaurantTraceabilitySchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    lastModifiedAttribute: [],
    timestamp: {
        type: Date,
        required: true
    }
});



const restaurantTraceability = mongoose.model("restaurantTraceability", restaurantTraceabilitySchema);

export default restaurantTraceability;