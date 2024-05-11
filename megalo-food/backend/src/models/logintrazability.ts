import mongoose from 'mongoose';

// Definir el esquema para el registro de trazabilidad
const trazabilidadLogInSchema = new mongoose.Schema({
  nombre: {type: String},
  fechaHora: { type: Date, default: Date.now }
});

// Definir el modelo para el registro de trazabilidad
const TrazabilidadLogIn = mongoose.model('TrazabilidadLogIn', trazabilidadLogInSchema);
export default TrazabilidadLogIn;