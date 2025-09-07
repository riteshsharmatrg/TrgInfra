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
    origin: "*", // or ["http://localhost:8080", "https://yourdomain.com"]
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/v1/requests", requestRoutes);
app.use("/api/v1/contactUs", contactUsRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
