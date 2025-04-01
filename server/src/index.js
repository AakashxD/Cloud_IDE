import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());


app.use("/api", router); 

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
