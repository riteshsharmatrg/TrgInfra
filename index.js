import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import requestRoutes from "./Routes/requestRoute.js";
import contactUsRoutes from "./Routes/contactUsRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/v1/requests", requestRoutes);
app.use("/api/v1/contactUs", contactUsRoutes);

const buildPath = path.join(__dirname, "client", "dist");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
