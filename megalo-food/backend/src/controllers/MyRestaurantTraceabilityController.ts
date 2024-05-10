import restaurantTraceability from "../models/restaurantTraceability";

const logRestaurantActivity = async (restaurantId: string, name: string, lastModifiedAttribute: string[], activity: string) => {
    try {
        const restaurantTrace = new restaurantTraceability({
            restaurantId,
            name,
            activity,
            lastModifiedAttribute,
            timestamp: new Date()
        });
        await restaurantTrace.save();
    } catch (error) {
        console.log("Error al registrar actividad del restaurante:", error);
    }
};

export { logRestaurantActivity };