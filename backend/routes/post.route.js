import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import { PostModel } from "../models/index.js";
dotenv.config();

const router = express.Router();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/", async (req, res) => {
	try {
		const posts = await PostModel.find();
		return res.status(200).json({ data: posts });
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

router.post("/", async (req, res) => {
	try {
		const { name, prompt, photo } = req.body;
		const photoUrl = await cloudinary.uploader.upload(photo);

		const newPost = PostModel.create({
			name: name,
			prompt: prompt,
			photo: photoUrl.url,
		});

		res.status(201).json({ data: newPost });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
