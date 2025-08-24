import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();


router.post("/", async(req , res) => {
    try {
        const{ name, email, message} = req.body;
        const newContact = new Contact({ name, email, message});
        await newContact.save();
        res.json({ success: true, message: "Message received successfully"});
    } catch (error) {
        res.status(500).json({ success : false , error: error.message});
        
    }
});

export default router;