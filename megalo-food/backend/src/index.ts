import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Conectado a la base de datos!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
    console.log("Servidor iniciado en localhost:7000")
});
