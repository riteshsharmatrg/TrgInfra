import express from "express";
import { createContact, getAllContacts } from "../Controllers/contactUsController.js";

const router = express.Router();

router.post("/contact", createContact);    
router.get("/getAllContactUs", getAllContacts);    

export default router;
