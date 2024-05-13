import TrazabilidadLogIn from "../models/logintrazability";
const trazabilidadlogin = async (email: string, activity: string) => {
    try {
      
      const nuevaTrazabilidadLogIn = new TrazabilidadLogIn({
        email,
        activity,
        timestamp: new Date()
      });
      await nuevaTrazabilidadLogIn.save();
  
      // Enviar respuesta exitosa
    } catch (error) {
        console.log("Error al registrar actividad del usuario:", error);
    }
  };

export {trazabilidadlogin};