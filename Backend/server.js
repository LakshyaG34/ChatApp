import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();
app.use(express.json()); // to parse the incoming request with JSON payloads(from req.body)

app.post("/", (req, res) => {
    res.send("This server is created by lakshya");
});


app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

connectToMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
