// import { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import User from "../models/user";

// // Definir el esquema para el registro de trazabilidad
// const trazabilidadLogInSchema = new mongoose.Schema({
//   nombre: {type: String},
//   fechaHora: { type: Date, default: Date.now }
// });

// // Definir el modelo para el registro de trazabilidad
// const TrazabilidadLogIn = mongoose.model('TrazabilidadLogIn', trazabilidadLogInSchema);

// // Método trazabilidad
// export const trazabilidadlogin = async (req: Request, res: Response) => {
//     try {
//       // Buscar el nombre asociado al userId en MongoDB
//       const usuario = await User.findById(req.userId);
  
//       if (!usuario) {
//         return res.status(404).json({ error: 'Usuario no encontrado' });
//       }
//       const nombre_user =usuario.name;
//       // Registrar la trazabilidad en la tabla de MongoDB
//       const nuevaTrazabilidadLogIn = new TrazabilidadLogIn({
//         nombre_user
//       });
//       await nuevaTrazabilidadLogIn.save();
  
//       // Enviar respuesta exitosa
//       res.status(200).json({ mensaje: 'Trazabilidad registrada exitosamente' });
//     } catch (error) {
//       // Manejo de errores
//       console.error('Error al registrar trazabilidad:', error);
//       res.status(500).json({ error: 'Error interno del servidor' });
//     }
//   };
