import mongoose from 'mongoose';

// Definir el esquema para el registro de trazabilidad
const trazabilidadLogInSchema = new mongoose.Schema({
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

// Definir el modelo para el registro de trazabilidad
const TrazabilidadLogIn = mongoose.model('TrazabilidadLogIn', trazabilidadLogInSchema);
export default TrazabilidadLogIn;