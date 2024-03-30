import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express(); // Crear una instancia de express

app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(cors()) // Middleware para permitir peticiones desde cualquier origen

require('dotenv').config(); // Cargar las variables de entorno

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

if (!MONGODB_CONNECTION_STRING) {
    throw new Error('MONGODB_CONNECTION_STRING is not defined in the environment variables');
}

mongoose.connect(MONGODB_CONNECTION_STRING).then(() => console.log('Base de Datos conectada exitosamente.')); // Conectar a la base de datos

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log('Base de Datos conectada exitosamente.')); // Conectar a la base de datos

app.get('/', (req, res) => {
  res.json({ message: '¡Bienvenido a MegaloFood!' }); // Enviar un JSON como respuesta
});

const PORT = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor

// Levantar el servidor en el puerto especificado
app.listen(PORT, () => { 
  console.log(`Server MegaloFood running in port ${PORT}`);
});

