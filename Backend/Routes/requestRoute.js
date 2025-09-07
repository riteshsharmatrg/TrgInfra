import express from "express";
import { createRequest, getAllRequests } from "../Controllers/requestController.js";

const router = express.Router();

router.post("/createRequest", createRequest);

router.get("/getAllRequest", getAllRequests);

export default router;
