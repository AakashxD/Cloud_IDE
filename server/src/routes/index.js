import express from "express";
import v1router from "./v1/index.js"; // Ensure correct path and extension

const router = express.Router();

router.use("/v1", v1router); // Mount v1 routes

export default router;