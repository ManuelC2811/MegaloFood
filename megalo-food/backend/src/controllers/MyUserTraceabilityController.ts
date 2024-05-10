import UserTraceability from "../models/userTraceability";

const logUserActivity = async (userId: string, email: string, activity: string) => {
    try {
        const userTrace = new UserTraceability({
            userId,
            email,
            activity,
            timestamp: new Date()
        });
        await userTrace.save();
    } catch (error) {
        console.log("Error al registrar actividad del usuario:", error);
    }
};

export { logUserActivity };