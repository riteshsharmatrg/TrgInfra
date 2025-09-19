const express = require("express");
const cors = require("cors");
const requestRoutes = require("./Routes/requestRoute");
const contactUsRoutes = require("./Routes/contactUsRoute");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/v1/requests", requestRoutes);
app.use("/api/v1/contactUs", contactUsRoutes);

const buildPath = path.join(__dirname, "client", "dist");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
