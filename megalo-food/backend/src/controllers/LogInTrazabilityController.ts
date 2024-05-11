import TrazabilidadLogIn from "../models/logintrazability";
const trazabilidadlogin = async (name: string) => {
    try {
      
      const nuevaTrazabilidadLogIn = new TrazabilidadLogIn({
        name
      });
      await nuevaTrazabilidadLogIn.save();
  
      // Enviar respuesta exitosa
    } catch (error) {
        console.log("Error al registrar actividad del usuario:", error);
    }
  };

export {trazabilidadlogin};